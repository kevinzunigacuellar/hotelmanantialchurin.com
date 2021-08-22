import Link from 'next/link'
import Image from 'next/image'
export default function Card({ img, title, description, tags, url }) {
  return (
    <div className='max-w-md md:max-w-3xl xl:max-w-md bg-white rounded-lg border shadow overflow-hidden'>
      <div className='md:flex xl:flex-col'>
        <div className='relative h-60 md:w-2/5 lg:w-1/3 xl:w-full'>
          <Image
            className='absolute h-full w-full object-cover'
            src={img}
            alt={title}
            layout='fill'
          />
        </div>
        <div className='p-8 md:w-3/5 lg:w-2/3 xl:w-full'>
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
        </div>
      </div>
    </div>
  )
}
