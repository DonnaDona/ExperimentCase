import { configureStore } from '@reduxjs/toolkit'
import experimentReducer from '../views/experiment/experimentSlice'

export default configureStore({
    reducer: {
        experiment: experimentReducer,
    },
})