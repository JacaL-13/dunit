import { createSlice } from "@reduxjs/toolkit";

export const curParentSlice = createSlice({
	name: 'curParent',
	initialState: {
		value: '9aa00e26-e651-4f77-bf6a-a00211c5d8d6'
	},
	reducers: {
		setCurParent: (state, action) => {
			state.value = action.payload
		},
		clearCurParent: (state) => {
			state.value = null
		}
	}
})

export const {setCurParent, clearCurParent} = curParentSlice.actions

export const selectCurParent = (state) => state.curParent.value

export default curParentSlice.reducer