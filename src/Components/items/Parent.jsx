import './Parent.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Item from './Item'
import Header from '../Header'

function Parent(props) {
	const [items, setItems] = useState([])
	const curParentId = useParams().itemid
	
	useEffect(() => {
		axios
			.get('http://localhost:3000/items')
			.then((res) => {
				setItems(res.data)
			})
			.catch((err) => console.error(err))
	}, [])
	
	function newParent(parentId) {
		
	}
	
	const dispItems = items
		.filter((val) => {
			return curParentId ? val.parentId === curParentId : val.parentId === null
		})
		.map((val, idx) => {
			return <Item thisItem={val} key={val.itemId} />
		})

	return (
		<div>
			<header>
				<Header items={items} curParentId={curParentId} />
			</header>
			<div className="main">{dispItems}</div>
		</div>
	)
}

export default Parent
