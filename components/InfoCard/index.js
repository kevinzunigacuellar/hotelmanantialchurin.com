export default function InfoCard({ title, description, img }) {
  return (
    <div className='mx-auto max-w-md md:max-w-full bg-white rounded-xl shadow border overflow-hidden'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0 md:h-60 md:w-72 lg:w-96'>
          <img
            className='w-full md:w-auto md:h-full object-cover'
            src={img}
            alt={title}
          />
        </div>
        <div className='p-8'>
          <h1 className='font-sans font-semibold inline-block mt-1 text-lg leading-tight text-black'>
            {title}
          </h1>
          <p className='text-md mt-2 text-gray-500'>{description}</p>
        </div>
      </div>
    </div>
  )
}
