import {createSlice} from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        showQuestions: false,
    },
    reducers: {
        setShowQuestions: (state, action) => {
            state.showQuestions = action.payload
        },
    },
})

export const {setShowQuestions} = mainSlice.actions

export const selectShowQuestions = state => state.main.showQuestions

export default mainSlice.reducer