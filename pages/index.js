import Head from 'next/head'
import ListOfCards from 'components/ListOfCards'
import { CARDS_INICIO, INFO_CARD_INICIO } from 'data/inicio'
import InfoCard from 'components/InfoCard'
import Title from 'components/Title'

export default function Home({ CARDS_INICIO, INFO_CARD_INICIO }) {
  return (
    <>
      <Head>
        <title>
          Hotel Manantial de Churin | Encuentre habitaciones de hotel en Churin
        </title>
        <meta
          name='description'
          content='Ofertas exclusivas para el Hotel Manantial de Churin. Reserve su hotel en Churin y obtenga una experiencia de primer nivel y las mejores tarifas, garantizadas.'
        />
        <meta name='robots' content='index, follow' />
      </Head>

      <div className='mb-6'>
        <ListOfCards info={CARDS_INICIO} />
      </div>
      <Title>¿Que hacer en Churín?</Title>
      <InfoCard
        title={INFO_CARD_INICIO.title}
        description={INFO_CARD_INICIO.description}
        img={INFO_CARD_INICIO.img}
      />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      CARDS_INICIO,
      INFO_CARD_INICIO,
    },
  }
}
