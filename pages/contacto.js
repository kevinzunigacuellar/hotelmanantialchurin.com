import Title from 'components/Title'
import Head from 'next/head'
import ContactInfo from 'components/ContactInfo'
export default function Contacto() {
  return (
    <>
      <Head>
        <title>Hotel Manantial de Churin | Contacto</title>
        <link rel='icon' href='/ventana.svg' />
      </Head>
      <Title>Contacto</Title>
      <ContactInfo />
    </>
  )
}
