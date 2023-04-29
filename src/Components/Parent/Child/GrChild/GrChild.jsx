import './GrChild.css'
import '../Child.css'

import { useDispatch } from 'react-redux'
import { delItem } from '../../../../redux/slices/itemsSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { FaChevronRight, FaTrashAlt } from 'react-icons/fa'

import Item from '../../../items/Item'

const { REACT_APP_SERVER_PORT } = process.env

function GrChild(props) {
	const { thisItem, idx } = props

	const dispatch = useDispatch()

	function hdlDelete(eve) {
		dispatch(delItem(thisItem.itemId))
		axios.delete(`http://localhost:${REACT_APP_SERVER_PORT}/items/${thisItem.itemId}`)
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
