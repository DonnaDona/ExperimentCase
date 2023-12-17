import React, {useEffect, useState} from "react";
import {Alert, Button, Card, CardContent, Stack, Typography, useTheme} from "@mui/material";

export function Question({id, question, warmup, options, answer, format, onAnswerClick, showCorrect}) {
    const theme = useTheme();
    const [startTime, setStartTime] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correct, setCorrect] = useState(false);

    const getCurrentTime = () => {
        return window.performance.now();
    };

    useEffect(() => {
        setSelectedOption(null);
        setCorrect(false);

        setStartTime(getCurrentTime());
    }, [id]);

    const handleOptionClick = (option, option_idx) => {
        const endTime = getCurrentTime();

        if (option === answer) {
            setCorrect(true);
        }

        setSelectedOption(option);

        const answer_obj = {
            'qid': id,
            'warmup': warmup,
            'answer': option,
            'answerIndex': option_idx,
            'correct': option === answer,
            'time': endTime - startTime,
            'format': format,
        };

        onAnswerClick(answer_obj); // Notify the parent component about the answer click
    };

    return (<Card sx={{padding: 4, borderRadius: 6, width: '100%', boxSizing: 'border-box'}}>
        <CardContent>
            {/*set smaller variant on mobile*/}
            <Typography variant="h2"
                        sx={{
                            fontWeight: "bold", marginBottom: 2, [theme.breakpoints.down('sm')]: {
                                fontSize: 32,
                            }
                        }}>
                {question}
            </Typography>

            <Stack>
                {options.map((option, index) => (<Button
                    key={index}
                    variant="outlined"
                    size="large"
                    sx={{
                        marginTop: 3,
                        fontSize: 26,
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 20,
                        },
                        
                        textTransform: "none",
                        borderRadius: 8,
                        backgroundColor: showCorrect ? (selectedOption === option && correct ? "lightGreen" : selectedOption === option ? "red" : "transparent") : "transparent",
                    }}
                    onClick={() => {
                        handleOptionClick(option, index);
                    }}
                    disabled={selectedOption !== null}
                >
                    {option}
                </Button>))}
            </Stack>
        </CardContent>
        {/*{showCorrect && correct && <Alert severity="success">Correct!</Alert>}*/}
        {/*{showCorrect && selectedOption !== null && !correct && (<Alert severity="error">Incorrect!</Alert>)}*/}
    </Card>);
}
