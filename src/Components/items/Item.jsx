import './Item.css'
import 'react-accessible-accordion/dist/fancy-example.css'

import { useState, useEffect } from 'react'

import { BsFillCalendarFill } from 'react-icons/bs'

import { devData } from '../../data/devData'

function Item(props) {
	const [item, setItem] = useState(devData.find((item) => item.itemId === props.itemId))

	console.log(item)
	
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
			<BsFillCalendarFill size={25} />
		</div>
	)
}

export default Item
