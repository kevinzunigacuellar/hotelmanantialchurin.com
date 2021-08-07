export default function HorizontalCard() {
  return (
    <div className='max-w-md md:max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <img
            className='h-48 w-full object-cover'
            src='/habitacion.jpg'
            alt='Man looking at item at a store'
          />
        </div>
        <div className='p-8'>
          <a
            href='#'
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
            Finding customers for your new business
          </a>
          <p className='mt-2 text-gray-500'>
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  )
}
