import Button from 'components/Button'

export default function VerticalCard({ title, description, tags, img, url }) {
  return (
    <div className='max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-md'>
      <img className='w-full' src={img} alt={title} />
      <div className='p-8'>
        <div className='block mt-1 text-lg leading-tight font-medium text-black'>
          {title}
        </div>
        <p className='mt-2 text-gray-500'>{description}</p>
        <div className='py-4'>
          {tags.map(({ id, name }) => (
            <span
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
              key={id}>
              {`#${name}`}
            </span>
          ))}
        </div>
        <div className='flex justify-center'>
          <Button url={url}>Más información</Button>
        </div>
      </div>
    </div>
  )
}
