import Card from 'components/Card'
import contactoImg from 'public/contacto.jpg'
import habitacionImg from 'public/habitacion.jpg'
import turismoImg from 'public/turismo.jpg'
import nosotrosImg from 'public/nosotros.jpeg'

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 my-6">
      <Card
        description="Nuestras habitaciones cuentan con agua caliente, televisión de pantalla plana e internet de alta velocidad."
        img={habitacionImg}
        title="Habitaciones"
        url="/habitaciones"
      />
      <Card
        description="El Hotel Manantial se enorgullece de tener el mejor servicio en Churín al precio más bajo garantizado."
        img={contactoImg}
        title="Contacto"
        url="/contacto"
      />
      <Card
        description="Descubra Churín en un viaje inolvidable. Báñese en todas las aguas termales y libérese del estrés de la vida cotidiana."
        img={turismoImg}
        title="Turismo"
        url="/turismo"
      />
      <Card description="hello world" img={nosotrosImg} title="Nosotros" url="/nosotros" />
    </div>
  )
}
