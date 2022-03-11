import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import { useState, ReactNode } from 'react'
import Logo from 'components/Logo'
import Link from 'next/link'

const NAVIGATION = [
  { href: '/', name: 'Inicio' },
  { href: '/nosotros', name: 'Nosotros' },
  { href: '/habitaciones', name: 'Habitaciones' },
  { href: '/contacto', name: 'Contacto' },
  { href: '/turismo', name: 'Turismo' },
]

function NavItem({ href, name }: { href: string; name: string }) {
  return (
    <Link href={href}>
      <a className="block hover:bg-gray-900 p-2 rounded-md sm:px-4">{name}</a>
    </Link>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-gray-700">
      <header className="sm:flex sm:items-center sm:justify-between mx-auto max-w-5xl">
        <div className="flex justify-between items-center px-4 py-5 text-white">
          <Logo className="h-6 w-auto" />
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
          } px-2 space-y-1 pb-2.5 sm:flex sm:p-0 sm:space-y-0 sm:space-x-1 text-white sm:mx-4 lg:mx-0`}
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
      <main className="max-w-5xl mx-auto px-4">{children}</main>
    </>
  )
}
