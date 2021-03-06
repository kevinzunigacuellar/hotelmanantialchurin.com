import Container from 'components/Container'
import Title from 'components/Title'
import Image from 'next/image'
import PASOS_RESERVA from 'content/contacto'
import { PhoneIcon } from '@heroicons/react/outline'
import bcpImg from 'public/photos/bcp.png'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Contacto() {
  return (
    <Container
      title="Hotel Manantial de Churin | Contacto"
      description="Contactenos a nuestras officinas en Lima y Churin llamando al teléfono +51992755015"
    >
      <Title title="Contacto" />
      <section className="bg-white p-6 shadow rounded-md mb-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">¿Cómo hacer una reserva?</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PASOS_RESERVA.map(({ id, step, imgSrc }) => (
            <article key={id}>
              <figure className="block rounded-md overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={step}
                  layout="responsive"
                  className="h-full w-full"
                  objectFit="cover"
                  placeholder="blur"
                />
              </figure>
              <p className="text-center pt-4 font-semibold text-gray-600">{step}</p>
            </article>
          ))}
        </div>
      </section>
      <Title title="Reservas" />
      <section className="bg-white rounded-md shadow p-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Teléfonos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 mb-4">
          <a
            href="https://wa.me/+51992755015"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:bg-gray-100 rounded-md p-2"
          >
            <FaWhatsapp className="h-6 w-auto fill-green-500" />
            <p className="text-gray-500">
              <span className="block">WhatsApp</span>
              <span className="block text-gray-900">+51 992 755 015</span>
            </p>
          </a>
          <a
            href="tel:012373052"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:bg-gray-100 rounded-md p-2"
          >
            <PhoneIcon className="h-6 w-auto stroke-blue-500" />
            <p className="text-gray-500">
              <span className="block">Línea fija</span>
              <span className="block text-gray-900">+51 1 237 3052</span>
            </p>
          </a>
        </div>
        <h2 className="text-lg font-semibold mb-3 text-gray-900">Cuenta Bancaria</h2>
        <figure className="flex items-center mb-4">
          <Image
            src={bcpImg}
            width={100}
            height={100}
            alt="bcp"
            className="rounded-md aspect-square"
            placeholder="blur"
          />
          <p className="p-6 font-semibold text-gray-600">191-203-173-500-74</p>
        </figure>
        <h2 className="text-lg font-semibold mb-3 text-gray-900">Redes sociales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8">
          <a
            href="https://www.facebook.com/hotelmanantialchurin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 hover:bg-gray-100 rounded-md space-x-3"
          >
            <FaFacebook className="h-8 w-auto text-blue-500" />
            <p className="text-sm text-gray-600">Facebook</p>
          </a>
          <a
            href="https://www.instagram.com/hotelmanantialchurin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 hover:bg-gray-100 rounded-md space-x-3"
          >
            <AiOutlineInstagram className="h-8 w-auto fill-pink-600" />
            <p className="text-sm text-gray-600">Instagram</p>
          </a>
        </div>
      </section>
    </Container>
  )
}
