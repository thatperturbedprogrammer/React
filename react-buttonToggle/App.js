import { useState } from 'react'

export default function App() {
	const [isOn, setIsOn] = useState(true)

	// Toggle function
	const handleToggle = () => {
		setIsOn(!isOn)
	}
	return (
		<>
			<h1>Hello there!</h1>
			<button
				id="toggle"
				style={{
					backgroundColor: isOn ? 'black' : 'lightgray',
					color: isOn ? 'white' : 'black'
				}}
				onClick={handleToggle}
			>
				{isOn ? 'on' : 'off'}
			</button>
		</>
	)
}
