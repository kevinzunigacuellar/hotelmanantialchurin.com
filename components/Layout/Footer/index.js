import Link from 'next/link'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdCopyright } from 'react-icons/md'
import { LocationMarkerIcon } from '@heroicons/react/outline'
const navigation = [
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Habitaciones', href: '/habitaciones' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Turismo', href: '/turismo' },
]

export default function Footer() {
  return (
    <footer className='bg-white py-8 mt-auto border-t-2 border-gray-300'>
      <div className='flex flex-wrap justify-center p-2 space-x-3'>
        {navigation.map(({ name, href }) => (
          <Link href={href} key={name}>
            <a className='p-2 cursor-pointer antialiased rounded-lg text-md text-gray-500 hover:text-gray-800 font-semibold'>
              {name}
            </a>
          </Link>
        ))}
      </div>
      <div className='flex justify-center p-2 space-x-5 text-gray-400'>
        <a href='https://www.facebook.com/hotelmanantialchurin/'>
          <FaFacebook className='w-6 h-6 fill-current hover:text-gray-700' />
        </a>
        <a href='https://www.instagram.com/hotelmanantialchurin/'>
          <AiOutlineInstagram className='w-6 h-6 fill-current hover:text-gray-700' />
        </a>
        <a href='https://wa.me/+51992755015'>
          <FaWhatsapp className='w-6 h-6 fill-current hover:text-gray-700' />
        </a>
        <a href='https://g.page/hotelmanantialchurin?share'>
          <LocationMarkerIcon className='w-6 h-6 hover:text-gray-700' />
        </a>
      </div>
      <div className='flex center-items justify-center text-gray-400'>
        <MdCopyright className='w-4 h-4 fill-current' />
        <p className='antialiased text-xs'>
          {`${new Date().getFullYear()} Hotel Manantial. Todos los derechos reservados.`}
        </p>
      </div>
    </footer>
  )
}