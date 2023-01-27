import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
	name: 'items',
	initialState: {
		value: [
			{
				itemId: 'b334acaa-34e3-495a-9e88-aabfa4b63cf9',
				parentId: null,
				textContent: 'Create your first item!',
				startDate: null,
				endDate: null,
				dun: false,
				newItem: false
			}
		]
	},
	reducers: {
		setItems: (state, action) => {
			state.value = action.payload
		},
		clearItems: (state, action) => {
			state.value = null
		},
		updateItem: (state, action) => {
			const idx = state.value.findIndex((item) => item.itemId === action.payload.itemId)
			const updArr = [...state.value]
			updArr.splice(idx, 1, action.payload)
			return {
				...state,
				value: updArr
			}
		},
		addItem: (state, action) => {
			const { newId, parentId } = action.payload
			return {
				...state,
				value: [
					...state.value,
					{
						itemId: newId,
						parentId: parentId,
						textContent: '',
						startDate: null,
						endDate: null,
						dun: false,
						newItem: true
					}
				]
			}
		},
		delItem: (state, action) => {
			const idx = state.value.findIndex((item) => item.itemId === action.payload)
			const updArr = [...state.value]
			updArr.splice(idx, 1)
			return {
				...state,
				value: updArr
			}
		}
	}
})

export const { setItems, clearItems, updateItem, addItem, delItem } = itemsSlice.actions

export const selectItems = (state) => state.items.value

export default itemsSlice.reducer
