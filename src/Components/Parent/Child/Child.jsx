import './Child.css'

import { useState, useEffect, useRef } from 'react'

import Item from '../../items/Item'

function Child(props) {
	const [dun, setDun] = useState()
	
	return (
		<div className="child">
			<div className="item-bar">
				<Item thisItem={props.thisItem} />
			</div>
		</div>
	)
}

export default Child
