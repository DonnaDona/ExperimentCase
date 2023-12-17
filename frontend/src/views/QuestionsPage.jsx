import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Question} from "../components/Question";
import questionsData from "../../../generator/questions.json";
import {LinearProgress, Stack} from "@mui/material";

// questions are sorted for randomness (?) tbd
//questions.sort(() => Math.random() - 0.5);
const questions = [...questionsData["warmup"], ...questionsData["questions"]];
console.log(questions);

const getQuestion = (idx) => questions[idx];

export default function QuestionsPage() {
    const dispatch = useDispatch();
    const [questionIdx, setQuestionIdx] = useState(0);

    const handleAnswerClick = (answer) => {
        setTimeout(() => {
            setQuestionIdx(questionIdx + 1);
        }, 2000);
    };

    return (<Stack>
        {/*<LinearProgress value={questionIdx / questions.length * 100} variant="determinate" sx={{marginBottom: 2}}/>*/}
        <Question
            {...getQuestion(questionIdx)}
            onAnswerClick={handleAnswerClick}
        />

    </Stack>);
}