import React from 'react'
import Patients from './Patients'

function PatientsList() {
    return (
        <div className="md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className='text-xl mt-5 mb-7 text-center'>
                Administra tus {''}<span className='text-indigo-600 font-bold'>Pacientes y citas</span>
            </p>
            <Patients />
            <Patients />
            <Patients />
            <Patients />
            <Patients />
            <Patients />

           

            
        </div>
    )
}

export default PatientsList