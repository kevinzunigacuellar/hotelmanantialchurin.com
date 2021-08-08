import Title from 'components/Title'
export default function Gallery() {
  return (
    <div>
      <Title>Galeria de fotos</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        <div className='rounded-lg overflow-hidden shadow-md h-64 lg:w-full'>
          <img
            className='object-cover lg:w-full h-full '
            src='/img-1.jpg'></img>
        </div>
        <div className='lg:col-span-2  lg:row-span-3 rounded-lg overflow-hidden shadow-md h-64 lg:h-full'>
          <img
            className='object-cover h-full object-left-top'
            src='/img-2.jpeg'></img>
        </div>
        <div className='rounded-lg overflow-hidden shadow-md h-64 lg:w-full'>
          <img
            className='object-cover h-full lg:w-full'
            src='/img-3.jpeg'></img>
        </div>
        <div className='rounded-lg overflow-hidden shadow-md h-64 lg:w-full'>
          <img className='object-cover h-full lg:w-full' src='/img-4.jpg'></img>
        </div>
      </div>
    </div>
  )
}
