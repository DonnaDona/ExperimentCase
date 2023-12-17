import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Question} from "../components/Question";
import questionsData from "../../../generator/questions.json";
import {LinearProgress, Stack} from "@mui/material";
import {finishExperiment, addAnswer} from "./experiment/experimentSlice.jsx";

// questions are sorted for randomness (?) tbd
//questions.sort(() => Math.random() - 0.5);
const questions = [...questionsData["warmup"], ...questionsData["questions"]];
const numQuestions = questions.length;

const getQuestion = (idx) => questions[idx];

export default function QuestionsPage() {
    const dispatch = useDispatch();
    const [questionIdx, setQuestionIdx] = useState(0);

    const handleAnswerClick = (answer) => {
        setTimeout(() => {
            dispatch(addAnswer(answer));
            if (questionIdx + 1 === numQuestions) {
                dispatch(finishExperiment());
                return;
            }
            setQuestionIdx(questionIdx + 1);
        }, 500);
    };

    return (<Stack>
        {/*<LinearProgress value={questionIdx / questions.length * 100} variant="determinate" sx={{marginBottom: 2}}/>*/}
        <Question
            {...getQuestion(questionIdx)}
            onAnswerClick={handleAnswerClick}
        />

    </Stack>);
}