import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const experimentSlice = createSlice({
    name: 'experiment', initialState: {
        phase: 0, // 0: not started, 1: started, 2: finished
        personData: {
            'age': 0,
            'eyeIssues': false,
            'dyslexia': false,
            'isNativeEnglishSpeaker': false,
            'programmingExperience': 0,
        }, answers: [],
    }, reducers: {
        setPersonData: (state, action) => {
            state.personData = action.payload
        }, startExperiment: (state) => {
            state.phase = 1;
        }, finishExperiment: (state) => {
            state.phase = 2;
            experimentSlice.caseReducers.sendData(state);
            console.log("Experiment finished");
        }, sendData: (state) => {
            console.log("Sending data to backend...");
            const experiment = {
                'form': state.personData, 'answers': state.answers,
            };
            axios.post('http://localhost:5000/api/experiments', experiment).then(res => {
                console.log(res);
                console.log(res.data);
            });
        }, addAnswer: (state, action) => {
            state.answers.push(action.payload);
        },
    },
})

export const {addAnswer, setPersonData, startExperiment, finishExperiment} = experimentSlice.actions

export const selectIsNotStarted = (state) => state.experiment.phase === 0
export const selectIsRunning = (state) => state.experiment.phase === 1

export default experimentSlice.reducer