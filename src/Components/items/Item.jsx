import './Item.css'
import 'react-accessible-accordion/dist/fancy-example.css'

import { useState, useEffect } from 'react'

import { BsFillCalendarFill } from 'react-icons/bs'

function Item(props) {
	const [item, setItem] = useState(props.thisItem)
	
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
		</div>
	)
}

export default Item
