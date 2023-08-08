import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proyecto Telemetria',
  description: 'Assist Control System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
