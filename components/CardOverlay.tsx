import Image from 'next/image'

export default function CardOverlay({
  img,
  title,
  description,
  price,
}: {
  img: any
  title: string
  description: string
  price?: number | undefined
}) {
  return (
    <article>
      <div className="block rounded-md overflow-hidden">
        <Image
          src={img}
          alt={title}
          layout="responsive"
          className="h-full w-full aspect-video"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <div className="relative px-4 -mt-16 sm:-mt-20 sm:px-6">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="font-semibold mb-2 text-lg text-gray-900">{title}</h2>
          <p className="text-gray-500">{description}</p>
          {price && (
            <div className="mt-2">
              <span className="font-medium">{`S/. ${price}.00 `}</span>
              <span className="text-gray-600 text-sm">/noche</span>
            </div>
          )}
          <p className="mt-2 text-gray-500 text-xs">Precio no valido para feriados</p>
        </div>
      </div>
    </article>
  )
}

CardOverlay.defaultProps = {
  price: undefined,
}
