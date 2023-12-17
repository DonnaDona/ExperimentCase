import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Question} from "../components/Question";
import questionsData from "../../../generator/questions.json";
import {Button, LinearProgress, Stack} from "@mui/material";
import {finishExperiment, addAnswer, finishDemo} from "./experiment/experimentSlice.jsx";

// questions are sorted for randomness (?) tbd
//questions.sort(() => Math.random() - 0.5);
const questions = [...questionsData["warmup"], ...questionsData["questions"]];
const numQuestions = questions.length;

const getQuestion = (idx) => questions[idx];

export default function QuestionsPage({questions, demo = false}) {
    const dispatch = useDispatch();
    const [questionIdx, setQuestionIdx] = useState(0);

    const handleAnswerClick = (answer) => {
        setTimeout(() => {
            dispatch(addAnswer(answer));
            if (questionIdx + 1 === numQuestions) {
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
            {...getQuestion(questionIdx)}
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