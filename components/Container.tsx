import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface ContainerProps {
  title: string
  description: string
  children: ReactNode
}

export default function Container({ title, description, children }: ContainerProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="keywords" content="hotel, churin, hospedaje, manantial, baños termales" />
        <meta content={description} name="description" />
        <meta property="og:url" content={`https://www.hotelmanantialchurin.com${router.asPath}`} />
        <link rel="canonical" href={`https://www.hotelmanantialchurin.com${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Manantial de Churin" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="https://www.hotelmanantialchurin.com/banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.hotelmanantialchurin.com/banner.jpg" />
      </Head>
      {children}
    </>
  )
}
