import React, {useEffect, useState} from "react";
import {Alert, Button, Card, CardContent, Stack, Typography} from "@mui/material";

export function Question({id, question, options, answer, format, onAnswerClick}) {
    const [startTime, setStartTime] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);
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

    const handleOptionClick = (option) => {
        const endTime = getCurrentTime();
        setTimeTaken(endTime - startTime);

        if (option === answer) {
            setCorrect(true);
        }

        setSelectedOption(option);
        onAnswerClick(option); // Notify the parent component about the answer click
    };

    return (<Card sx={{padding: 4, borderRadius: 6}}>
            <CardContent>
                <Typography variant="h3" sx={{fontWeight: "bold", marginBottom: 2}}>
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
                                textTransform: "none",
                                borderRadius: 8,
                                // backgroundColor: selectedOption === option && correct ? "green" : selectedOption === option ? "red" : "transparent",
                                // color: selectedOption === option ? "white" : "black",
                            }}
                            onClick={() => {
                                handleOptionClick(option);
                            }}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </Button>))}
                </Stack>
            </CardContent>
            {/*{correct && <Alert severity="success">Correct!</Alert>}*/}
            {/*{selectedOption !== null && !correct && (<Alert severity="error">Incorrect!</Alert>)}*/}
        </Card>);
}
