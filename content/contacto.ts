import depositImg from 'public/photos/deposit.jpeg'
import writeImg from 'public/photos/write_us.png'
import sendImg from 'public/photos/send_voucher.jpeg'

const PASOS_RESERVA = [
  {
    id: 1,
    step: '1. Escribenos al WhatsApp',
    imgSrc: writeImg,
  },
  {
    id: 2,
    step: '2. Depósita a la cuenta bancaria',
    imgSrc: depositImg,
  },
  {
    id: 3,
    step: '3. Envíanos el voucher',
    imgSrc: sendImg,
  },
]

export default PASOS_RESERVA
