import React from 'react'
import Patients from './Patients'

function PatientsList({patients}) {
    
    return (
        <div className="md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll">
            {patients && patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className='text-xl mt-5 mb-7 text-center'>
                        Administra tus {''}<span className='text-indigo-600 font-bold'>Pacientes y citas</span>
                    </p>

                    {patients.map((patient) =>
                        <Patients
                            key={patient.id}
                            patient={patient} />
                    )}
                </>
            ) 
            : 
            (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes para revisar</h2>
                    <p className='text-xl mt-5 mb-7 text-center'>
                        Agrega aquí {''}<span className='text-indigo-600 font-bold'>los pacientes</span>
                    </p>
                </>
            ) 
            }
            
        </div>
    )
}

export default PatientsList