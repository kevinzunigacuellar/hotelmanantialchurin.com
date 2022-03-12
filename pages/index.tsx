import Card from 'components/Card'
import CARDS_INFO from 'content/cards'
import Container from 'components/Container'
import lakeImg from 'public/photos/turismo_churin.jpeg'
import Image from 'next/image'

export default function Home() {
  return (
    <Container
      title="Hotel Manantial de Churin | Encuentre habitaciones de hotel en Churin"
      description="Ofertas exclusivas para el Hotel Manantial de Churin. Reserve su hotel en Churin y obtenga una experiencia de primer nivel y las mejores tarifas, garantizadas."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
        {CARDS_INFO.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold pb-4 text-gray-900">¿Que hacer en Churín?</h2>
      <article>
        <div className="block rounded-md overflow-hidden">
          <Image
            src={lakeImg}
            alt="Huancahuasi"
            layout="responsive"
            className="h-full w-full aspect-video"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
        <div className="relative px-4 -mt-16 sm:-mt-20 sm:px-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="font-semibold mb-2 text-lg text-gray-900">Aguas Termomediciales</h3>
            <p className="text-gray-500">
              Churín es famosa por las aguas que emanan de sus tierras a una temperatura de entre 35
              y 55 grados °C. Los baños termales más visitados de la zona son: La Meseta, Baños de
              La Juventud, Complejo Mamahuarmi, Baños de Tingo y muchos más.
            </p>
          </div>
        </div>
      </article>
    </Container>
  )
}
