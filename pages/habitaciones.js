import { CARDS_HABITACIONES } from 'data/habitaciones'
import Head from 'next/head'
import Title from 'components/Title'
import CardBoxOverlay from 'components/CardBoxOverlay'

export default function Habitaciones({ CARDS_HABITACIONES }) {
  return (
    <>
      <Head>
        <title>Hotel Manantial de Churin | Habicationes</title>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <Title>Habitaciones</Title>
      <div className='flex flex-col lg:flex-row gap-8 justify-center items-center'>
        {CARDS_HABITACIONES.map(({ img, title, price, description, id }) => (
          <CardBoxOverlay
            key={id}
            img={img}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { CARDS_HABITACIONES } }
}
