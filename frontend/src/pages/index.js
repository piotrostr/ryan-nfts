import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Header from 'components/Header'
import { Page, Footer } from 'components/styled'
import HomeView from 'components/HomeView'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Pixil Artillery</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeView />
    </Page>
  )
}

