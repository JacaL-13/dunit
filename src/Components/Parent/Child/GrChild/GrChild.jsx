import './GrChild.css'

import { useSelector, useDispatch } from 'react-redux'
import { selectItems, delItem } from '../../../../redux/slices/itemsSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { FaChevronRight, FaTrashAlt } from 'react-icons/fa'

import Item from '../../../items/Item'

function GrChild(props) {
	const items = useSelector(selectItems)

	const { thisItem, idx } = props

	const dispatch = useDispatch()

	function hdlDelete(eve) {
		dispatch(delItem(thisItem.itemId))
		axios.delete(`http://localhost:3000/items/${thisItem.itemId}`)
	}

	return (
		<div className="child-wrapper">
			<FaTrashAlt className="del-btn" onClick={hdlDelete} />
			<div className="gr-child">
				<Item thisItem={thisItem} parentPlus={props.parentPlus} />
				<div className="chev-con">
						<Link to={`/${thisItem.parentId}/${idx}`}>
							<FaChevronRight size={25} />
						</Link>
				</div>
			</div>
		</div>
	)
}

export default GrChild
