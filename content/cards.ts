import nosotrosImg from 'public/photos/nosotros.jpeg'
import contactoImg from 'public/photos/contacto.jpeg'
import habitacionImg from 'public/photos/habitacion.jpeg'
import turismoImg from 'public/photos/turismo.jpeg'

const CARDS_INFO = [
  {
    id: 1,
    title: 'Habitaciones',
    description:
      'Nuestras habitaciones cuentan con agua caliente, televisión de pantalla plana e internet de alta velocidad.',
    img: habitacionImg,
    url: '/habitaciones',
  },
  {
    id: 2,
    title: 'Contacto',
    description:
      'El Hotel Manantial se enorgullece de tener el mejor servicio en Churín al precio más bajo garantizado.',
    img: contactoImg,
    url: '/contacto',
  },
  {
    id: 3,
    title: 'Turismo',
    description:
      'Descubra Churín en un viaje inolvidable. Báñese en todas las aguas termales y libérese del estrés de la vida cotidiana.',
    img: turismoImg,
    url: '/turismo',
  },
  {
    id: 4,
    title: 'Nosotros',
    description: 'Estamos comprometidos con su estadía en Churín. ¡Reserve ahora!',
    img: nosotrosImg,
    url: '/turismo',
  },
]

export default CARDS_INFO
