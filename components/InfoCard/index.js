import Image from 'next/image'

export default function InfoCard({ title, description, img }) {
  return (
    <div className='mx-auto max-w-md md:max-w-3xl xl:max-w-5xl bg-white rounded-lg border shadow overflow-hidden'>
      <div className='md:flex'>
        <div className='relative h-60 md:w-2/5 lg:w-1/3'>
          <Image
            className='absolute w-full h-full object-cover object-right'
            src={img}
            alt={title}
            layout='fill'
          />
        </div>
        <div className='p-8 md:w-3/5 lg:w-2/3'>
          <h1 className='font-sans font-semibold inline-block mt-1 text-lg leading-tight text-black'>
            {title}
          </h1>
          <p className='text-md mt-2 text-gray-500'>{description}</p>
        </div>
      </div>
    </div>
  )
}
