import './Item.css'
import 'react-accessible-accordion/dist/fancy-example.css'

import { useState } from 'react'

import { BsFillCalendarFill } from 'react-icons/bs'

function Item(props) {
	const [txtItem, setTxtItem] = useState('An Item')

	return (
		<div className="dunit-item">
			<div
				className="dunit-text"
				contentEditable
				suppressContentEditableWarning
				onKeyDown={(eve) => {
					console.log(eve.key)
					if (eve.key === 'Enter') {
						eve.preventDefault()
						document.activeElement.blur()
					}
				}}
				onBlur={(eve) => {
					setTxtItem(eve.target.textContent)
				}}
			>
				{txtItem}
			</div>
			<BsFillCalendarFill size={25}/>
		</div>
	)
}

export default Item
