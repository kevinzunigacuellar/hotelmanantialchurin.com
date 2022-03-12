import { MenuAlt3Icon, XIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { useState, ReactNode } from 'react'
import Logo from 'components/Logo'
import Link from 'next/link'
import LargeLogo from 'components/LargeLogo'
import NAVIGATION from 'content/navigation'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdCopyright } from 'react-icons/md'

function NavItem({ href, name }: { href: string; name: string }) {
  return (
    <Link href={href}>
      <a className="block text-sm hover:bg-gray-900 p-2 rounded-md sm:px-3 font-semibold">{name}</a>
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto border-t border-gray-300">
      <div className="flex flex-wrap justify-center p-2 space-x-3">
        {NAVIGATION.map(({ name, href }) => (
          <Link href={href} key={name}>
            <a className="p-2 cursor-pointer antialiased rounded-lg text-md text-gray-500 hover:text-gray-800 font-semibold">
              {name}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex justify-center p-2 space-x-5 text-gray-400">
        <a href="https://www.facebook.com/hotelmanantialchurin/">
          <FaFacebook className="w-6 h-6 fill-current hover:text-gray-700" />
        </a>
        <a href="https://www.instagram.com/hotelmanantialchurin/">
          <AiOutlineInstagram className="w-6 h-6 fill-current hover:text-gray-700" />
        </a>
        <a href="https://wa.me/+51992755015">
          <FaWhatsapp className="w-6 h-6 fill-current hover:text-gray-700" />
        </a>
        <a href="https://g.page/hotelmanantialchurin?share">
          <LocationMarkerIcon className="w-6 h-6 hover:text-gray-700" />
        </a>
      </div>
      <div className="flex center-items justify-center text-gray-400 mt-2">
        <MdCopyright className="w-4 h-4 fill-current mr-2" />
        <p className="antialiased text-xs">
          {`${new Date().getFullYear()} Hotel Manantial. Todos los derechos reservados.`}
        </p>
      </div>
    </footer>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-gray-700">
      <header className="sm:flex sm:items-center sm:justify-between mx-auto max-w-5xl sm:px-4">
        <div className="flex justify-between items-center p-4 sm:p-2 text-white">
          <Link href="/">
            <a>
              <Logo className="h-6 w-auto sm:hidden" />
              <LargeLogo className="hidden h-10 w-auto sm:block" />
            </a>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="sm:hidden focus:outline-none"
          >
            {isOpen ? <XIcon className="h-6 w-auto" /> : <MenuAlt3Icon className="h-6 w-auto" />}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } px-2 space-y-1 pb-2.5 sm:flex sm:p-0 sm:space-y-0 sm:space-x-1 text-white`}
        >
          {NAVIGATION.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </nav>
      </header>
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 pt-6 pb-12">{children}</main>
      <Footer />
    </>
  )
}
