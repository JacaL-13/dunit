import './Item.css'
import 'react-accessible-accordion/dist/fancy-example.css'

import { useState, useEffect, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateItem, selectItems } from '../../redux/slices/itemsSlice'
import axios from 'axios'
import DatePicker from 'react-date-picker'

const { REACT_APP_SERVER_PORT } = process.env

function Item(props) {
	const [item, setItem] = useState(props.thisItem)
	const [startDt, setStartDt] = useState(() => {
		return props.thisItem.startDate === null ? null : new Date(props.thisItem.startDate)
	})
	const [endDt, setEndDt] = useState(() => {
		return props.thisItem.endDate === null ? null : new Date(props.thisItem.endDate)
	})

	const items = useSelector(selectItems)

	const { setExpand } = props

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
		const curItem = items.find(({ itemId }) => itemId === item.itemId)
		if (
			!(
				curItem.textContent === item.textContent &&
				curItem.startDate === item.startDate &&
				curItem.endDate === item.endDate &&
				curItem.dun === item.dun
			)
		) {
			dispatch(updateItem(item))
			axios.put(`http://localhost:${REACT_APP_SERVER_PORT}/items`, item)
		} else {
		}
	}, [item, items, dispatch])

	function hdlDunChng(eve) {
		setItem((prev) => {
			return { ...prev, dun: eve.target.checked }
		})
		if (setExpand && eve.target.checked) {
			setExpand(false)
		}
	}

	const focusNew = useCallback(
		(itemText) => {
			if (itemText && item.newItem) {
				itemText.focus()
			}
		},
		[item.newItem]
	)

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
						props.parentPlus(eve)
					}
				}}
				onBlur={(eve) => {
					setItem((prev) => {
						return { ...prev, textContent: eve.target.textContent }
					})
				}}
				ref={focusNew}
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
					Due Date
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
				<input type="checkbox" checked={item.dun} onChange={hdlDunChng} />
				<span className="checkmark"></span>
			</label>
		</div>
	)
}

export default Item
