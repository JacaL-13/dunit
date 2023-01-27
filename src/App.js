import './App.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems, setItems, selectItems } from './redux/slices/itemsSlice'
import { clearCurParent, setCurParent } from './redux/slices/curParentSlice'

import Parent from './Components/Parent/Parent'

function App() {
	const [isLoading, setLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get('http://localhost:3000/items')
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
