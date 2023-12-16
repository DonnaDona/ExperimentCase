import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Stack, Typography } from "@mui/material";
import {Question} from "../components/Question";

export default function QuestionsPage() {
    const dispatch = useDispatch();
    const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));

    const handleAnswerClick = (questionIndex, answerIndex) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[questionIndex] = answerIndex;
        setSelectedAnswers(newSelectedAnswers);
    };

    return (
        <Question question={"peter pater"} answer={"peterPater"} options={["hidf", "peterPater", "dicnv"]}/>
        // <Card sx={{ padding: 5, bgcolor: "#e8ecfa", width: 400 }}>
        //     <Typography variant="h2">Peter Parker</Typography>
        //     <Typography variant="h5" sx={{ marginY: 2 }}>
        //         Click the correct spelling for each format.
        //     </Typography>
        //
        //     <hr />
        //
        // </Card>
    );
}
