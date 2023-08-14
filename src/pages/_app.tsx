import Layout from '@/app/components/layout'
import type { AppProps } from 'next/app'
import '@/app/globals.css'
import awsmobile from '@/aws-exports';
import { Provider, cacheExchange, createClient, fetchExchange } from 'urql';

export default function MyApp({ Component, pageProps }: AppProps) {
    const client = createClient({
        url: awsmobile.aws_appsync_graphqlEndpoint,
        exchanges: [cacheExchange, fetchExchange],
      });

    return (
        <Provider value={client}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </Provider>
    )
}