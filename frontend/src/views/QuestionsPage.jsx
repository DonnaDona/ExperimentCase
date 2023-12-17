import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Question} from "../components/Question";
import {Button, LinearProgress, Stack} from "@mui/material";
import {finishExperiment, addAnswer, finishDemo} from "./experiment/experimentSlice.jsx";

export default function QuestionsPage({questions, demo = false}) {
    const dispatch = useDispatch();
    const [questionIdx, setQuestionIdx] = useState(0);

    const handleAnswerClick = (answer) => {
        setTimeout(() => {
            dispatch(addAnswer(answer));
            if (questionIdx + 25 === questions.length) {
                if (demo) {
                    dispatch(finishDemo());
                } else {
                    dispatch(finishExperiment());
                }
                return;
            }
            setQuestionIdx(questionIdx + 1);
        }, 500);
    };

    return (<Stack sx={{width: 'min(600px, 100%)'}}>
        {/*<LinearProgress value={questionIdx / questions.length * 100} variant="determinate" sx={{marginBottom: 2}}/>*/}
        <Question
            {...questions[questionIdx]}
            showCorrect={demo}
            onAnswerClick={handleAnswerClick}
        />

        {demo && <Button
            variant="contained"
            sx={{marginTop: 2, borderRadius: 4}}
            onClick={() => {
                dispatch(finishDemo());
            }}
        >
            Finish demo
        </Button>}


    </Stack>);
}