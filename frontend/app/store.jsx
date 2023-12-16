import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../src/features/mainSlice'

export default configureStore({
    reducer: {
        main: mainReducer,
    },
})