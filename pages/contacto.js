import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlinePhone } from 'react-icons/ai'
export default function Contacto() {
  return (
    <>
      <Title>Contacto</Title>
      <div className='flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-4'>
        <div className='flex flex-col flex-shrink-0 space-y-4 py-6 px-8 border shadow-sm rounded-md'>
          <div>
            <Subtitle>Reservas</Subtitle>
            <div className='flex flex-col space-y-4'>
              <a
                className='flex space-x-2 rounded-md py-2 px-4 hover:bg-gray-100'
                href='https://wa.me/+51992755015'
                target='_blank'
                rel='noreferrer'>
                <FaWhatsapp className='fill-current w-6 h-auto text-green-600' />
                <div>
                  <p className='text-gray-600 text-sm'>WhatsApp:</p>
                  <p className='font-medium'>+51 992 755 015</p>
                </div>
              </a>
              <a
                className='flex space-x-2 rounded-md py-2 px-4 hover:bg-gray-100'
                href='tel:012373052'>
                <AiOutlinePhone className='fill-current w-6 h-auto text-blue-600' />
                <div>
                  <p className='text-gray-600 text-sm'>Linea fija:</p>
                  <p className='font-medium'>+51 1 2373052</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <Subtitle>Cuenta Bancaria</Subtitle>
            <div className='flex items-center'>
              <img
                src='/bcp.png'
                alt='bcp'
                className='w-16 sm:w-24 rounded-md'
              />
              <p className='p-4 text-gray-600 tracking-wide font-medium'>
                191-203-173-500-74
              </p>
            </div>
          </div>
          <div>
            <Subtitle>Redes sociales</Subtitle>
            <div className='flex space-x-4 items-center'>
              <a
                className='p-2 rounded-md text-blue-600 hover:bg-gray-100'
                href='https://www.facebook.com/hotelmanantialchurin/'
                target='_blank'
                rel='noreferrer'>
                <FaFacebook className='fill-current w-8 h-auto' />
              </a>
              <a
                className='p-2 rounded-md text-pink-600 hover:bg-gray-100'
                href='https://www.instagram.com/hotelmanantialchurin/'
                target='_blank'
                rel='noreferrer'>
                <AiOutlineInstagram className='fill-current w-8 h-auto' />
              </a>
            </div>
          </div>
        </div>
        <div className='border shadow-sm rounded-md px-8 py-6'>
          <Subtitle>¿Como hacer una reserva?</Subtitle>
          <div className='grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 2xl:grid-cols-3'>
            <div>
              <div className='w-full h-56 rounded-md overflow-hidden'>
                <img
                  src='/writetowhatsapp.png'
                  alt='write to whatsapp'
                  className='object-cover w-full h-full'
                />
              </div>
              <p className='p-4 text-center text-gray-700 text-md font-medium'>
                1. Escribenos al WhatsApp
              </p>
            </div>
            <div>
              <div className='w-full h-56 rounded-md overflow-hidden'>
                <img
                  src='/transfer.jpg'
                  alt='write to whatsapp'
                  className='object-cover w-full h-full'
                />
              </div>
              <p className='p-4 text-center text-gray-700 text-md font-medium'>
                2. Deposita a la cuenta bancaria
              </p>
            </div>
            <div>
              <div className='w-full h-56 rounded-md overflow-hidden'>
                <img
                  src='/send-a-photo.jpg'
                  alt='write to whatsapp'
                  className='object-cover w-full h-full'
                />
              </div>
              <p className='p-4 text-center text-gray-700 text-md font-medium'>
                3. Mandanos el voucher
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
