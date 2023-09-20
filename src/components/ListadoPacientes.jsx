import { useEffect } from "react"
import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll max-md:mt-10">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center " >Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Aministra tus {' '}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {pacientes.map((paciente) => {
                        return <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                    })

                    }
                </>
            ) : (
                <>
                <h2 className="font-black text-3xl text-center " >No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregar pacientes y{' '}
                        <span className="text-indigo-600 font-bold">administralos</span>
                    </p>
                </>
            )
            }


        </div>
    )
}

export default ListadoPacientes