import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agência de desenolvimento de sites e aplicativos.',
  description: 'Tenha um site profissional e leve sua empresa para um outro nível!',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_LINK
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <meta name="facebook-domain-verification" content="7ilaovcelrsjufi2dt3pkie9rlm3zx" />
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
