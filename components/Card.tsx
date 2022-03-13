import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  img: any
  url: string
}
export default function Card({ img, title, description, url }: CardProps) {
  return (
    <article className="bg-white rounded-md shadow overflow-hidden">
      <div className="sm:flex lg:block">
        <figure className="block sm:w-1/2 lg:w-auto">
          <Image
            className="h-full w-full aspect-video"
            src={img}
            alt={title}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
          />
        </figure>
        <div className="p-8 sm:w-1/2 lg:w-full">
          {url ? (
            <Link href={url}>
              <a className="font-sans font-semibold inline-block mt-1 text-lg leading-tight text-black hover:underline">
                {title}
              </a>
            </Link>
          ) : (
            <p className="font-sans font-semibold inline-block mt-1 text-lg leading-tight text-black">
              {title}
            </p>
          )}
          <p className="mt-2 text-gray-500 text-md">{description}</p>
        </div>
      </div>
    </article>
  )
}
