import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { cacheExchange, Client, createClient, fetchExchange } from 'urql'
import awsExports from './aws-exports'


// to be used outside React
export let globalUrqlClient: Client

/**
 * Creates a new client Urql using the credentials
 * retrieved from the Ampify/Cognito user. This Urql
 * client will be used along all the app through a
 * Provider, using the React's Context API.
 * */
export function useUrqlClient(){
  const [urqlClient, setUrqlClient] = useState<Client>()
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    
    ;(async () => {
      try {
        const auth = await Auth.currentSession()
        const token = auth.getIdToken().getJwtToken()

        // change according to the env
        const client = createClient({
          url: awsExports.aws_appsync_graphqlEndpoint,
          exchanges: [cacheExchange, fetchExchange],
          fetchOptions: () => {
            return {
              headers: { authorization: token },
            }
          },
        })
        setUrqlClient(client)
        globalUrqlClient = client
        setLoading(false)
      } catch (e) {
        setLoading(false)
        console.error('Error retrieving the user:', e)
      }
    })()
    // }
  }, [])

  return [urqlClient, loading]
}
