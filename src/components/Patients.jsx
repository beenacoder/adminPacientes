
function Patients({patient}) {

    //Desctructuring 
    const {petName, ownerName, email, date, symptoms}= patient;

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-md'>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                    {/* OldSchool: <span className='font-normal normal-case'>{patient.petName}</span> */}
                    <span className='font-normal normal-case'>{petName}</span> 
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                    {/* OldSchool: <span className='font-normal normal-case'>{patient.ownerName}</span> */}
                    <span className='font-normal normal-case'>{ownerName}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>Email de contacto: {''}
                    <span className='font-normal normal-case'>{email}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: {''}
                    <span className='font-normal normal-case'>{date}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                    <span className='font-normal normal-case'>{symptoms}</span>
                </p>

                <div className="flex justify-between mt-10">
                    <button 
                        type="button"
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                        >Editar
                    </button>
                    <button 
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                        >Eliminar
                    </button>
                </div>
            </div>
  )
}

export default Patients