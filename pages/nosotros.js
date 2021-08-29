import Head from 'next/head'
import Gallery from 'components/Gallery'
import { GALLERY_DATA } from 'data/nosotros'
import Title from 'components/Title'

export default function Nosotros({ GALLERY_DATA }) {
  return (
    <>
      <Head>
        <title>Hotel Manantial de Churin | Nosotros</title>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <Title>Galeria de fotos</Title>
      <Gallery GALLERY_DATA={GALLERY_DATA} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { GALLERY_DATA } }
}
