import Title from 'components/Title'
import Container from 'components/Container'
import Image from 'next/image'
import TURISMO_CONTENT from 'content/turismo'

function Card({ title, description, imgSrc }: { title: string; description: string; imgSrc: any }) {
  return (
    <article className="rounded-md overflow-hidden sm:flex shadow">
      <figure className="relative aspect-[4/3] sm:w-1/2 md:w-1/3">
        <Image
          src={imgSrc}
          alt="turismo"
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          className="absolute w-full h-full"
        />
      </figure>
      <div className="p-6 bg-white w-full sm:w-1/2 md:w-2/3">
        <h2 className="font-semibold mb-2 text-gray-900 text-lg">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </article>
  )
}

export default function Turismo() {
  return (
    <Container title="Hotel Manantial de Churin | Turismo" description="">
      <Title title="¿A donde ir en Churín?" />
      <section className="grid grid-cols-1 gap-8">
        {TURISMO_CONTENT.map(({ id, ...props }) => (
          <Card key={id} {...props} />
        ))}
      </section>
    </Container>
  )
}
