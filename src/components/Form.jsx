import { useState } from "react"
import Error from "./Error";


function Form({patients, setPatients, message}) {
	const [petName, setPetName] = useState('');
	const [ownerName, setOwnerName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [symptoms, setSymptoms] = useState('');

	//Error state
	const [error, setError] = useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();

		//Validations
		if([petName, ownerName, email, date, symptoms].includes('')){
			setError(true);
			console.log('error');
			return;
		}
		setError(false);

		//Patients objets
		const patientsObj = {
			petName, 
			ownerName, 
			email, 
			date, 
			symptoms
		}

		setPatients([...patients, patientsObj]);

		//Unsetting form
		setPetName('');
		setOwnerName('');
		setEmail('');
		setDate('');
		setSymptoms('');

	}


	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
			<p className="text-lg mt-5 text-center">
				Añade pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span>
			</p>

			<form className="bg-white shadow-md rounded-lg py-10 px-5 mt-7 mb-10"
				onSubmit={handleSubmit}
			>
				{
					error && <Error message={"Todos los campos son obligatorios"}/>
						
				} 
				
					

				<div className="mb-5">
					<label 
					htmlFor="petName"
					className="block text-gray-700 uppercase font-bold">
						Mascota
					</label>
					<input 
						id="petName"
						type="text" 
						placeholder="Nombre de tu mascota" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={petName}
						onChange={(e)=>setPetName(e.target.value)}
						/>
				</div>

				<div className="mb-5">
					<label 
					htmlFor="ownerName"
					className="block text-gray-700 uppercase font-bold">
						Propietario
					</label>
					<input 
						id="ownerName"
						type="text" 
						placeholder="Nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={ownerName}
						onChange={(e)=>setOwnerName(e.target.value)}
						/>
				</div>

				<div className="mb-5">
					<label 
					htmlFor="email"
					className="block text-gray-700 uppercase font-bold">
						Dirección de correo
					</label>
					<input 
						id="email"
						type="email" 
						placeholder="Email de contacto"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
						/>
				</div>

				<div className="mb-5">
					<label 
					htmlFor="date"
					className="block text-gray-700 uppercase font-bold">
						Fecha de Alta
					</label>
					<input 
						id="date"
						type="date" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={date}
						onChange={(e)=>setDate(e.target.value)}
						/>
				</div>

				<div className="mb-5">
					<label 
						htmlFor="symptoms"
						className="block text-gray-700 uppercase font-bold">
						Síntomas
					</label>
					<textarea id="symptoms" cols="30"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="¿Cuáles son los síntomas de tu mascota?"
						value={symptoms}
						onChange={(e)=>setSymptoms(e.target.value)}
					/>
				</div>
				<input type="submit"
					className="bg-indigo-600 w-full p-3 text-white upper font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all"
					value="Agregar Paciente" 
				/>
			</form>

		</div>
	)
}

export default Form