import Link from 'next/link'
export default function Card({ img, title, description, tags, url, price }) {
  return (
    <div className='max-w-md md:max-w-full xl:max-w-md bg-white rounded-xl shadow-md overflow-hidden'>
      <div className='md:flex xl:flex-col'>
        <div className='md:flex-shrink-0'>
          <img className='h-60 w-full object-cover' src={img} alt={title} />
        </div>
        <div className='p-8'>
          {url ? (
            <Link href={url}>
              <a className='font-sans font-semibold inline-block mt-1 text-lg leading-tight text-black hover:underline'>
                {title}
              </a>
            </Link>
          ) : (
            <p className='font-sans font-semibold inline-block mt-1 text-lg leading-tight text-black'>
              {title}
            </p>
          )}
          <p className='mt-2 text-gray-500 text-md'>{description}</p>
          {tags && (
            <div className='py-4'>
              {tags.map(({ id, name }) => (
                <p
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                  key={id}>
                  {name}
                </p>
              ))}
            </div>
          )}
          {price && (
            <>
              <p className='mt-2 text-gray-800 text-md'>
                {`S/.${price}`}
                <span className='text-gray-500 text-sm'>{' /noche'}</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
