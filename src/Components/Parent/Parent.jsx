import './Parent.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { selectItems, addItem, delItem } from '../../redux/slices/itemsSlice'
import { AiOutlinePlus } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import Child from './Child/Child'
import Header from './Header/Header'

function Parent(props) {
	let { curParentId, expanded } = useParams()
	// const [curParentId, setCurParentId] = useState('9aa00e26-e651-4f77-bf6a-a00211c5d8d6')
	const items = useSelector(selectItems)

	const dispatch = useDispatch()

	if (!curParentId) {
		curParentId = null
	}

	function hdlPlusClick(eve) {
		const newItem = { newId: uuidv4(), parentId: curParentId }
		dispatch(addItem(newItem))
		axios.post('http://localhost:3000/items', newItem)
	}

	const dispItems = items
		.filter((val) => {
			return val.parentId === curParentId
		})
		.map((val, idx) => {
			return <Child thisItem={val} key={`item${val.itemId}`} idx={idx} expanded={+expanded === idx} parentPlus={hdlPlusClick} />
		})

	return (
		<div className="parent">
			<Header curParentId={curParentId} />
			<hr className="solid" />
			<div className="main">
				{dispItems}
				<AiOutlinePlus className="add-item" size={30} onClick={hdlPlusClick} />
			</div>
		</div>
	)
}

export default Parent
