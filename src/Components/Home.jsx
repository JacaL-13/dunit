import { useEffect } from "react"
import axios from 'axios'

import {devData} from "../data/devData"
import Item from "./items/Item"

function Home(props) {
	
	axios.get().then((res) => {
		
	}).catch((err) => console.log(err))
	
	const dispUserItems = devData.filter((val)=> {
		return val.parentId === null
	}).map((val, idx) => {
		return <Item itemId={val.itemId} />
	})
	
	return (
		<div>
			{dispUserItems}
		</div>
	)
}

export default Home