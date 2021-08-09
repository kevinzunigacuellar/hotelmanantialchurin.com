import { CARDS_HABITACIONES } from 'data/habitaciones'
import Title from 'components/Title'
import CardBoxOverlay from 'components/CardBoxOverlay'

export default function Habitaciones() {
  return (
    <>
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
