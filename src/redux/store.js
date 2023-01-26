import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from '../redux/slices/itemsSlice'
import curParentReducer from '../redux/slices/curParentSlice'

export default configureStore({
	reducer: {
		items: itemsReducer,
		curParent: curParentReducer
	}
})