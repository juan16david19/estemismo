export async function servicioHabitacion(){


  let url="https://servicio-cadena-hotelera.vercel.app//api/habitaciones"
  let peticion={
      method:"GET"
  }

  let respuesta=await fetch(url,peticion)
  return respuesta.json()
}