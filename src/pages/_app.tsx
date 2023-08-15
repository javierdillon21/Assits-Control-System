import Layout from '@/app/components/layout'
import type { AppProps } from 'next/app'
import '@/app/globals.css'
import awsmobile from '@/aws-exports';
import { Client, Provider, cacheExchange,createClient,fetchExchange } from 'urql';
import { Auth } from 'aws-amplify';
import { useUrqlClient } from '@/urql';


export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Layout>
        <Component {...pageProps} />
        </Layout>
    )
}