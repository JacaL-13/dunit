import './Parent.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { selectItems } from '../../redux/slices/itemsSlice'

import Child from './Child/Child'
import Header from './Header/Header'

function Parent(props) {
	let curParentId = useParams().itemid
	// const [curParentId, setCurParentId] = useState('9aa00e26-e651-4f77-bf6a-a00211c5d8d6')
	const items = useSelector(selectItems)

	if (!curParentId) {
		curParentId = null
	}

	const dispItems = items
		.filter((val) => {
			// return curParentId ? val.parentId === curParentId : val.parentId === null
			return val.parentId === curParentId
		})
		.map((val, idx) => {
			return <Child thisItem={val} key={`item${val.itemId}`} />
			// return <Item thisItem={val} key={`item${idx}`} />
		})

	return (
		<div className="parent">
			<Header curParentId={curParentId} />
			<hr className="solid" />
			<div className="main">{dispItems}</div>
		</div>
	)
}

export default Parent
