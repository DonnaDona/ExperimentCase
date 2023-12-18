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
            if (!demo) dispatch(addAnswer(answer));

            if (questionIdx === questions.length - 1) {
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

    return (<Stack sx={{width: 'min(650px, 100%)'}}>
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