import './App.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router'
import { useDispatch } from 'react-redux'
import { clearItems, setItems } from './redux/slices/itemsSlice'

import Parent from './Components/Parent/Parent'

const { REACT_APP_SERVER_PORT } = process.env

function App() {
	const [isLoading, setLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		console.log(`http://localhost:${REACT_APP_SERVER_PORT}/items`)
		axios
			.get(`http://localhost:${REACT_APP_SERVER_PORT}/items`)
			.then((res) => {
				dispatch(clearItems())
				dispatch(setItems(res.data))
				setLoading(false)
			})
			.catch((err) => console.error(err))
	}, [dispatch])

	if (isLoading) {
		return <div className="App">Loading...</div>
	}

	return (
		<div className="app">
			<Routes>
				<Route index element={<Parent curParentId={null} />} />
				<Route path="/:curParentId/:expanded" element={<Parent curParentId={window.location.pathname} />} />
			</Routes>
		</div>
	)
}

export default App
