import './Child.css'

import { FaChevronRight, FaChevronDown, FaTrashAlt } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectItems, addItem, delItem } from '../../../redux/slices/itemsSlice'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import Item from '../../items/Item'
import GrChild from './GrChild/GrChild'

function Child(props) {
	const [expand, setExpand] = useState(props.expanded) //future goal, expanded is a value from db so it remembers what the user had open. That way if you hit back it doesn't close everything.
	const items = useSelector(selectItems)
	const { thisItem } = props

	const dispatch = useDispatch()

	function hdlChevClick() {
		setExpand((prev) => !prev)
	}

	const dispItems = items
		.filter((val) => {
			return val.parentId === thisItem.itemId
		})
		.map((val, idx) => {
			return <GrChild thisItem={val} key={`item${val.itemId}`} idx={idx} parentPlus={hdlPlusClick} />
		})

	const hasChild = dispItems.length > 0

	function hdlPlusClick(eve) {
		const newItem = { newId: uuidv4(), parentId: thisItem.itemId }
		dispatch(addItem(newItem))
		axios.post('http://localhost:3000/items', newItem)
	}

	function hdlDelete(eve) {
		dispatch(delItem(thisItem.itemId))
		axios.delete(`http://localhost:3000/items/${thisItem.itemId}`)
	}

	return (
		<div className="child-wrapper">
			<FaTrashAlt className="del-btn" onClick={hdlDelete} />
			<div className="child">
				<div className="item-bar">
					<Item thisItem={thisItem} setExpand={setExpand} parentPlus={props.parentPlus} />
					<div className="chev-con">
						{expand ? (
							<FaChevronDown size={30} onClick={hdlChevClick} />
						) : (
							<FaChevronRight size={30} onClick={hdlChevClick} />
						)}
					</div>
				</div>
				{expand ? (
					<div className="expanded">
						{dispItems}

						<AiOutlinePlus className="add-item" size={25} onClick={hdlPlusClick} />
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Child
