

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const handleEliminarPaciente = () => {
        const respuesta = confirm(`Eliminar paciente ${paciente.id}?`)
        if(respuesta)
            eliminarPaciente(paciente.id)
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl" >
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {' '}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {' '}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {' '}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha alta: {' '}
                <span className="font-normal normal-case">{paciente.fechaAlta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {' '}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>
            <div className="mt-5">
                <button type="button" className="bg-blue-700 rounded hover:bg-blue-800 text-white p-1 pl-2 pr-2" 
                onClick={() => {
                    setPaciente(paciente)
                }}
                >Editar</button>
                <button type="button" className="bg-red-700 rounded hover:bg-red-800 text-white p-1  pl-2 pr-2 float-right"
                    onClick={handleEliminarPaciente}
                >Eliminar</button>
            </div>
        </div>
    )





}

export default Paciente
