import React, { useState } from 'react';
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

export default function App() {
    const [patients, setPatients] = useState([]);

    //Estado para el boton editar, para llenar formulario a editar
    const [patientEdit, setPatientEdit]= useState({});

    const deletePatient = (id) =>{
        const patientToDelete = patients.filter(patientDel => patientDel.id !== id);
        setPatients(patientToDelete);
    }

    return (
        <div className="container mx-auto mt-20 px-12">
            <Header />

            <div className="mt-12 md:flex">
                <Form 
                    patients={patients}
                    setPatients={setPatients}
                    patientEdit={patientEdit}
                    setPatientEdit={setPatientEdit}
                />
                <PatientsList 
                    patients={patients}
                    setPatientEdit={setPatientEdit}
                    deletePatient={deletePatient}
                />
            </div>

        </div>
    )
}