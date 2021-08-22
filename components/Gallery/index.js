import Image from 'next/image'
export default function Gallery({ GALLERY_DATA }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center'>
      {GALLERY_DATA.map(({ img, id }) => {
        return (
          <div
            className='relative rounded-lg overflow-hidden h-80 w-full max-w-2xl lg:max-w-3xl xl:h-96'
            key={id}>
            <Image
              className='absolute object-cover w-full h-full'
              src={img.src}
              alt={img.alt}
              layout='fill'
            />
          </div>
        )
      })}
    </div>
  )
}
