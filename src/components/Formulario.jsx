import { useState, useEffect } from "react"
import { Error } from "./Error"

export const Formulario = ({ setPacientes, pacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log([nombre, propietario, email, fechaAlta, sintomas])
    //validacion del formulario
    if ([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
      console.log('Todos los campos son requeridos')
      setError(true)
      return
    }
    setError(false)
    const generaId = () => {
      return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}-${Date.now().toString(36)}`
    }


    const objetoPAciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,      
    }

    if (paciente.id) {
      objetoPAciente.id = paciente.id
      const pacientesTemp = pacientes.map( (pacienteTemp) => pacienteTemp.id == objetoPAciente.id ? objetoPAciente :pacienteTemp)
      setPacientes(pacientesTemp)
      setPaciente({})
    } else {
      objetoPAciente.id = generaId()
      setPacientes([...pacientes, objetoPAciente])
    }



    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
  }

  const handleEdit = (e) => {
    e.preventDefault()
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 md:ml-4">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>


      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y{' '}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}>
        {error && <Error message={'Todos los campos son requeridos'}></Error>}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombreMascota">Nombre Mascota</label>
          <input className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            id="nombreMascota" type="text" placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombrePropietario">Nombre Propietario</label>
          <input className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md" id="nombrePropietario"
            type="text" placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email contacto</label>
          <input className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md" id="email"
            type="email" placeholder="Correo de contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Fecha alta</label>
          <input className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md" id="alta" type="date"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md" placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-700 transition-all p-2">
          {paciente.id ? 'Editar Paciente' : 'Agregar paciente'}</button>
      </form>


    </div>
  )
}

