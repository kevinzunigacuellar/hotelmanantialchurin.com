import Link from 'next/link'
export default function Button({ url, children }) {
  return (
    <Link href={url}>
      <a
        className='font-lato text-md'
        className='py-2 px-4 bg-gray-500 cursor-pointer text-center text-md rounded-md hover:bg-gray-600'>
        {children}
      </a>
    </Link>
  )
}
