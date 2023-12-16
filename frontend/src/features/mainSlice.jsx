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

export const {setQuery} = searchSlice.actions

export const selectQuery = state => state.search.query

export default searchSlice.reducer