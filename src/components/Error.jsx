

function Error({message}) {
  return (
        <div className="bg-red-600 text-white text-center font-bold p-3 uppercase mb-3 rounded bg-opacity-40">
			<p className="text-red-800">{message}</p>
		</div>
  )
}

export default Error