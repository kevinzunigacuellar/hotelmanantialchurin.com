import { CARDS_HABITACIONES } from 'data/habitaciones'
import Title from 'components/Title'
function Example({ img, price, title, description }) {
  return (
    <div className='antialiased text-gray-900'>
      <div className='max-w-lg'>
        <div className='relative pb-5/6'>
          <img
            className='absolute h-full w-full object-cover rounded-lg shadow-md'
            src={img}
            alt={title}
          />
        </div>
        <div className='relative px-4 -mt-16'>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <p className='mt-1 font-semibold text-lg leading-tight truncate'>
              {title}
            </p>
            <p className='mt-2 text-gray-500 text-md'>{description}</p>
            <div className='mt-2'>
              {`S/.${price}.00 `}
              <span className='text-gray-600 text-sm'>/ noche</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Habitaciones() {
  return (
    <>
      <Title>Habitaciones</Title>
      <div className='flex flex-col lg:flex-row gap-8 justify-center items-center'>
        {CARDS_HABITACIONES.map(({ img, title, price, description }) => (
          <Example
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
