import {createSlice} from '@reduxjs/toolkit'

export const experimentSlice = createSlice({
    name: 'experiment',
    initialState: {
        showQuestions: false,
        personData: {
            'age': 0,
            'eyeIssues': false,
            'dyslexia': false,
            'isNativeEnglishSpeaker': false,
            'programmingExperience': 0,
        },
    },
    reducers: {
        setShowQuestions: (state, action) => {
            state.showQuestions = action.payload
        },
        setPersonData: (state, action) => {
            state.personData = action.payload
        }
    },
})

export const {setShowQuestions, setPersonData} = experimentSlice.actions

export const selectShowQuestions = state => state.main.showQuestions

export default experimentSlice.reducer