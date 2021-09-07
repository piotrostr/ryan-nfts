import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Page, Footer } from 'components/styled'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Pixil Artillery</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginBottom: 50 }}>
        <Image 
          src={'/logo.jpeg'}
          width={273}
          height={223}
        />
      </div>
      <Link href={'/marketplace'}>
        <a>
          Marketplace
        </a>
      </Link>
      <Link href={'/mint'}>
        <a>
          Mint
        </a>
      </Link>
    </Page>
  )
}

