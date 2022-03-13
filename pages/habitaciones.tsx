import Container from 'components/Container'
import Title from 'components/Title'
import HABITACIONES_INFO from 'content/habitaciones'
import CardOverlay from 'components/CardOverlay'

export default function Habitaciones() {
  return (
    <Container
      title="Hotel Manantial de Churin | Contacto"
      description="Amplias habitaciones al mejor precio de Churin, Peru"
    >
      <Title title="Habitaciones" />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {HABITACIONES_INFO.map(({ id, ...props }) => (
          <CardOverlay key={id} {...props} />
        ))}
      </section>
    </Container>
  )
}
