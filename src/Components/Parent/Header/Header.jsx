import './Header.css'

import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectItems } from '../../../redux/slices/itemsSlice'

//Components
import Item from '../../items/Item'

function Header(props) {
	const items = useSelector(selectItems)
	const { curParentId } = props

	const curParent = items.find(({ itemId }) => itemId === curParentId)

	const pathArr = []

	function pushPathArr(itemId, textContent, parentId) {
		pathArr.push({ itemId: itemId, textContent: textContent, parentId: parentId })
		if (parentId) {
			const nextItem = items.find(({ itemId }) => itemId === parentId)
			pushPathArr(nextItem.itemId, nextItem.textContent, nextItem.parentId)
		}
	}

	//if not on home
	if (curParent) {
		pushPathArr(curParent.itemId, curParent.textContent, curParent.parentId)
	}

	const dispPath = pathArr.reverse().map((val, idx) => {
		if (val.itemId !== curParentId) {
			return (
				<li className="bread-item">
					<Link to={`/${val.itemId}/u`} key={`item${val.itemId}`}>
						{val.textContent}
					</Link>
				</li>
			)
		} else {
			return null
		}
	})

	return (
		<header>
			<ul className="breadcrumb" key='breadcrumb'>
				<li className={curParent ? 'bread-item' : null}>
					<Link
						key="home"
						to='/'
					>
						Home
					</Link>
				</li>
				{curParent ? dispPath : null}
			</ul>
			{curParent ? <Item thisItem={curParent} key={curParentId} /> : null}
		</header>
	)
}

export default Header
