import Container from 'components/Container'
import IMAGE_GALLERY from 'content/imageGallery'
import Image from 'next/image'
import Title from 'components/Title'

export default function Nosotros() {
  return (
    <Container
      title="Hotel Manantial de Churin | Nosotros"
      description="Conoce al staff del hotel manantial y fotos de nuestras instalaciones"
    >
      <Title title="Galería de fotos" />
      <div className="grid grid-cols-1 gap-8">
        {IMAGE_GALLERY.map(({ id, src, alt }) => (
          <figure className="block rounded-md overflow-hidden" key={id}>
            <Image src={src} alt={alt} layout="responsive" placeholder="blur" />
          </figure>
        ))}
      </div>
    </Container>
  )
}
