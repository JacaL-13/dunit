import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from '../redux/slices/itemsSlice'

export default configureStore({
	reducer: {items: itemsReducer}
})