import Layout from 'components/Layout'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from 'lib/ga'
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
