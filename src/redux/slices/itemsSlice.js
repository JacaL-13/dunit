import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
	name: 'items',
	initialState: {
		value: [{
			itemId: 'b334acaa-34e3-495a-9e88-aabfa4b63cf9',
			parentId: null,
			textContent: 'Create your first item!',
			startDate: null,
			endDate: null,
			dun: false
		}]
	},
	reducers: {
		setItems: (state, action) => {
			state.value = action.payload
		},
		clearItems: (state) => {
			state.value = null
		}
	}
})

export const {setItems, clearItems} = itemsSlice.actions

export const selectItems = (state) => state.items.value

export default itemsSlice.reducer