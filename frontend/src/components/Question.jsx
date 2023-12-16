import {useEffect, useState} from "react";
import {Alert, Button, Card, CardContent, Stack, Typography} from "@mui/material";

export function Question({question, options, answer}) {

    const [startTime, setStartTime] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);
    const [correct, setCorrect] = useState(false);


    const getCurrentTime = () => {
        return window.performance.now();
    }

    useEffect(() => {
        // start timing the new question
        setStartTime(getCurrentTime());
    }, [question]);

    const handleAnswerClick = (option) => {
        const endTime = getCurrentTime();
        setTimeTaken((endTime - startTime));

        if (option === answer) {
            console.log("Correct!");
            setCorrect(true);
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h3" sx={{fontWeight: "bold"}}>{question}</Typography>
                <Stack>
                    {options.map((option, index) => {
                        return (
                            <Button
                                key={index}
                                variant="outlined"
                                size="large"
                                sx={{marginTop: 3, fontSize: 26, textTransform: "none"}}
                                onClick={() => {
                                    handleAnswerClick(option);
                                }}
                            >
                                {option}
                            </Button>
                        );
                    })}
                </Stack>
            </CardContent>
            {correct && <Alert severity="success">Correct!</Alert>}
        </Card>
    )
}