import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import { useState, ReactNode } from 'react'
import Logo from 'components/Logo'
import Link from 'next/link'
import LargeLogo from 'components/LargeLogo'

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
      <a className="block text-sm hover:bg-gray-900 p-2 rounded-md sm:px-3 font-semibold">{name}</a>
    </Link>
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
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
    </>
  )
}
