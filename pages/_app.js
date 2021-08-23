import Layout from 'components/Layout'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel='icon' href='/ventana.svg' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
