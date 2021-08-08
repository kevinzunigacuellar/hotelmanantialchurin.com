import Card from 'components/Card'

export default function ListOfCards({ info }) {
  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-8 xl:grid-cols-3 justify-items-center'>
      {info.map(({ id, img, title, description, tags, url }) => (
        <Card
          key={id}
          img={img}
          title={title}
          description={description}
          tags={tags}
          url={url}
        />
      ))}
    </div>
  )
}
