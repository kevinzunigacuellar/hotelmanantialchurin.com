import Image from 'next/image'

export default function CardOverlay({
  img,
  title,
  description,
}: {
  img: any
  title: string
  description: string
}) {
  return (
    <article>
      <figure className="block rounded-md overflow-hidden">
        <Image
          src={img}
          alt={title}
          layout="responsive"
          className="h-full w-full aspect-video"
          objectFit="cover"
          placeholder="blur"
        />
      </figure>
      <div className="relative px-4 -mt-16 sm:-mt-20 sm:px-6">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="font-semibold mb-2 text-lg text-gray-900">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </article>
  )
}
