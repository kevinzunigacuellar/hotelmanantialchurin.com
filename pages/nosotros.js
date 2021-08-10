import Head from 'next/head'
import Gallery from 'components/Gallery'
import Title from 'components/Title'

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Hotel Manantial de Churin | Nosotros</title>
        <link rel='icon' href='/ventana.svg' />
      </Head>
      <Title>Galeria de fotos</Title>
      <Gallery />
    </>
  )
}
