import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Question} from "../components/Question";
import questionsData from "../../../generator/questions.json";

const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionsData.length);
    return questionsData[randomIndex];
};

export default function QuestionsPage() {
    const dispatch = useDispatch();
    const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
    const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));

    const handleAnswerClick = (questionIndex, answerIndex) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[questionIndex] = answerIndex;
        setSelectedAnswers(newSelectedAnswers);

        setTimeout(() => {
            setCurrentQuestion(getRandomQuestion());
        }, 2000);
    };

    return (
        <Question
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            options={currentQuestion.options}
            format={currentQuestion.format}
            onAnswerClick={handleAnswerClick}
        />
    );
}