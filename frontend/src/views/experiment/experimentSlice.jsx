import {createSlice} from '@reduxjs/toolkit'

export const experimentSlice = createSlice({
    name: 'experiment', initialState: {
        phase: 0, // 0: not started, 1: started, 2: finished, 3: demo
        personData: {
            'age': 0,
            'eyeIssues': false,
            'dyslexia': false,
            'isNativeEnglishSpeaker': false,
            'programmingExperience': 0,
        }, answers: [], sendDataError: null
    }, reducers: {
        setPersonData: (state, action) => {
            state.personData = action.payload
        }, startExperiment: (state) => {
            state.phase = 1;
        }, finishExperiment: (state) => {
            state.phase = 2;
            console.log("Experiment finished");
        }, startDemo: (state) => {
            state.phase = 3;
        }, finishDemo: (state) => {
            state.phase = 0;
        }, addAnswer: (state, action) => {
            state.answers.push(action.payload);
        },
    },
})

export const {
    startDemo, finishDemo, addAnswer, setPersonData, startExperiment, finishExperiment
} = experimentSlice.actions

export const selectIsNotStarted = (state) => state.experiment.phase === 0
export const selectIsRunning = (state) => state.experiment.phase === 1
export const selectIsDemo = (state) => state.experiment.phase === 3
export const selectExperiment = (state) => {
    return {
        'form': state.experiment.personData, 'answers': state.experiment.answers
    }
}

export default experimentSlice.reducer