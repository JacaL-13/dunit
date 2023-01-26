import './Item.css'
import 'react-accessible-accordion/dist/fancy-example.css'

import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { updateItem } from '../../redux/slices/itemsSlice'
import axios from 'axios'
import DatePicker from 'react-date-picker'

function Item(props) {
	const [item, setItem] = useState(props.thisItem)
	const [startDt, setStartDt] = useState(() => {
		return props.thisItem.startDate === null ? null : new Date(props.thisItem.startDate)
	})
	const [endDt, setEndDt] = useState(() => {
		return props.thisItem.endDate === null ? null : new Date(props.thisItem.endDate)
	})

	const dispatch = useDispatch()

	useEffect(() => {
		setItem((prev) => {
			return {
				...prev,
				startDate: startDt === null ? null : startDt.toISOString(),
				endDate: endDt === null ? null : endDt.toISOString()
			}
		})
	}, [startDt, endDt])

	useEffect(() => {
		dispatch(updateItem(item))
		axios.put('http://localhost:3000/items', item)
	}, [item, dispatch])

	return (
		<div className="dunit-item">
			<div
				className="dunit-text"
				contentEditable
				suppressContentEditableWarning
				onKeyDown={(eve) => {
					if (eve.key === 'Enter') {
						eve.preventDefault()
						document.activeElement.blur()
					}
				}}
				onBlur={(eve) => {
					setItem((prev) => {
						return { ...prev, textContent: eve.target.textContent }
					})
				}}
			>
				{item.textContent}
			</div>
			<div className="dates">
				<label>
					Start Date
					<DatePicker
						className="date-picker"
						onChange={(eve) => {
							setStartDt(eve)
						}}
						value={startDt}
					/>
				</label>
				<label>
					End Date
					<DatePicker
						className="date-picker"
						onChange={(eve) => {
							setEndDt(eve)
						}}
						value={endDt}
					/>
				</label>
			</div>
			<label className="container">
				<input type="checkbox" checked={item.dun} onChange={(eve) => {
					setItem((prev) => {
						return { ...prev, dun: eve.target.checked }
					})
				}}/>
				<span className="checkmark"></span>
			</label>
		</div>
	)
}

export default Item
