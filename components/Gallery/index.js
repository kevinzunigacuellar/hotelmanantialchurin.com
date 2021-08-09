import { GALLERY_DATA } from 'data/nosotros'

export default function Gallery() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
      {GALLERY_DATA.map(({ div, img, id }) => {
        return (
          <div className={div.style} key={id}>
            <img className={img.style} src={img.src} alt={img.alt}></img>
          </div>
        )
      })}
    </div>
  )
}
