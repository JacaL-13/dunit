import './Parent.css'

import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { selectItems, addItem } from '../../redux/slices/itemsSlice'
import { AiOutlinePlus } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import Child from './Child/Child'
import Header from './Header/Header'

const { REACT_APP_SERVER_PORT } = process.env

function Parent(props) {
	let { curParentId, expanded } = useParams()
	const items = useSelector(selectItems)

	const dispatch = useDispatch()

	if (!curParentId) {
		curParentId = null
	}

	function hdlPlusClick(eve) {
		const newItem = { newId: uuidv4(), parentId: curParentId }
		dispatch(addItem(newItem))
		axios.post(`http://localhost:${REACT_APP_SERVER_PORT}/items`, newItem)
	}

	const dispItems = items
		.filter((val) => {
			return val.parentId === curParentId
		})
		.map((val, idx) => {
			return (
				<Child
					thisItem={val}
					key={`item${val.itemId}`}
					idx={idx}
					expanded={+expanded === idx}
					parentPlus={hdlPlusClick}
				/>
			)
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
