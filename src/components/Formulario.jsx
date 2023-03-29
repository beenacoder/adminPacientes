import { useState } from "react"


function Formulario() {
	const [nombreMascota, setNombreMascota] = useState('');




	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
			<p className="text-lg mt-5 text-center">
				Añade pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span>
			</p>

			<form className="bg-white shadow-md rounded-lg py-10 px-5 mt-7 mb-10">
				<div className="mb-5">
					<label 
					htmlFor="mascotaNombre"
					className="block text-gray-700 uppercase font-bold">
						Mascota
					</label>
					<input 
						id="mascotaNombre"
						type="text" 
						placeholder="Nombre de tu mascota" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={nombreMascota}
						onChange={(e)=>setNombreMascota(e.target.value)}
						/>
				</div>

				<div className="mb-5">
					<label 
					htmlFor="propietarioNombre"
					className="block text-gray-700 uppercase font-bold">
						Propietario
					</label>
					<input 
						id="propietarioNombre"
						type="text" 
						placeholder="Nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
						/>
				</div>

				<div className="mb-5">
					<label 
					htmlFor="fechaDeAlta"
					className="block text-gray-700 uppercase font-bold">
						Fecha de Alta
					</label>
					<input 
						id="fechaDeAlta"
						type="date" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						/>
				</div>

				<div className="mb-5">
					<label 
						htmlFor="sintomas"
						className="block text-gray-700 uppercase font-bold">
						Síntomas
					</label>
					<textarea id="sintomas" cols="30"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="¿Cuáles son los síntomas de tu mascota?"
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

export default Formulario