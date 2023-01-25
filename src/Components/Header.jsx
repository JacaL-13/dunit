import './Header.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
	const { items } = props
	// let { curParentId } = props

	//testing id
	let curParentId = '9aa00e26-e651-4f77-bf6a-a00211c5d8d6'

	const curItem = items.find(({ itemId }) => itemId === curParentId)

	let pathItem = curItem

	const pathArr = []

	function pushPathArr(itemId, textContent, parentId) {
		pathArr.push({ itemId: itemId, textContent: textContent, parentId: parentId })
		if (parentId) {
			pathItem = items.find(({ itemId }) => itemId === parentId)
			pushPathArr(pathItem.itemId, pathItem.textContent, pathItem.parentId)
		}
	}

	if (pathItem) {
		pushPathArr(pathItem.itemId, pathItem.textContent, pathItem.parentId)
	}

	const dispPath = pathArr.reverse().map((val, idx) => {
		if (val.itemId !== curParentId) {
			return (
				<li>
					<Link to="/">{val.textContent}</Link>
				</li>
			)
		}
	})

	return (
		<header>
			<ul className="breadcrumb">
				<li>
					<Link to="/">Home</Link>
				</li>
				{dispPath}
			</ul>
		</header>
	)
}

export default Header
