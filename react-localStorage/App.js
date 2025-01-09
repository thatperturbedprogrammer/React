import React, { useEffect, useState } from 'react'

function Counter() {
	const [count, setCount] = useState(() => {
		// Initialize the count from local storage or default to 0
		const storedCount = localStorage.getItem('count')
		return storedCount ? parseInt(storedCount, 10) : 0
	})

	// Update local storage whenever the count changes
	useEffect(() => {
		localStorage.setItem('count', count)
	}, [count])

	// Handlers for increment and decrement
	const increment = () => {
		setCount((prevCount) => prevCount + 1)
	}
	const decrement = () => {
		setCount((prevCount) => prevCount - 1)
	}
	return (
		<div>
			<h2 data-testid="count-id">Count: {count}</h2>
			<button data-testid="inc-id" onClick={increment}>
				+
			</button>
			<button data-testid="dec-id" onClick={decrement}>
				-
			</button>
		</div>
	)
}

export default Counter
