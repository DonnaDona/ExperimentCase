import {createSlice} from '@reduxjs/toolkit'

export const experimentSlice = createSlice({
    name: 'experiment', initialState: {
        phase: 0, // 0: not started, 1: started, 2: finished
        personData: {
            'age': 0,
            'eyeIssues': false,
            'dyslexia': false,
            'isNativeEnglishSpeaker': false,
            'programmingExperience': 0,
        },
    }, reducers: {
        setPersonData: (state, action) => {
            state.personData = action.payload
        }, startExperiment: (state) => {
            state.phase = 1;
        }, finishExperiment: (state) => {
            state.phase = 2;
            console.log("Experiment finished");
        },
    },
})

export const {setPersonData, startExperiment, finishExperiment} = experimentSlice.actions

export const selectIsNotStarted = (state) => state.experiment.phase === 0
export const selectIsRunning = (state) => state.experiment.phase === 1

export default experimentSlice.reducer