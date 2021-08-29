import Layout from 'components/Layout'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel='icon' href='/ventana.svg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <meta name='keywords' content='hotel,churin,hospedaje' />
        <link rel='canonical' href='https://www.hotelmanantialchurin.com' />
        <meta name='language' content='Spanish' />
        <meta name='author' content='Kevin Zuniga Cuellar' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
