import Card from 'components/Card'
import CARDS_INFO from 'content/cards'
import Container from 'components/Container'
import lakeImg from 'public/photos/turismo_churin.jpeg'
import Title from 'components/Title'
import CardOverlay from 'components/CardOverlay'

export default function Home() {
  return (
    <Container
      title="Hotel Manantial de Churin | Encuentre habitaciones de hotel en Churin"
      description="Ofertas exclusivas para el Hotel Manantial de Churin. Reserve su hotel en Churin y obtenga una experiencia de primer nivel y las mejores tarifas, garantizadas."
    >
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
        {CARDS_INFO.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
      <Title title="¿Que hacer en Churín?" />
      <CardOverlay
        title="Aguas Termomediciales"
        img={lakeImg}
        description="Churín es famosa por las aguas que emanan de sus tierras a una temperatura de entre 35
              y 55 grados °C. Los baños termales más visitados de la zona son: La Meseta, Baños de
              La Juventud, Complejo Mamahuarmi, Baños de Tingo y muchos más."
      />
    </Container>
  )
}
