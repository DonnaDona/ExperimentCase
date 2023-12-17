import { useEffect, useState } from "react";
import { Alert, Button, Card, CardContent, Stack, Typography } from "@mui/material";

export function Question({ question, options, answer }) {
    const [startTime, setStartTime] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correct, setCorrect] = useState(false);

    const getCurrentTime = () => {
        return window.performance.now();
    };

    useEffect(() => {
        // reset selectedOption and correct when a new question is displayed
        setSelectedOption(null);
        setCorrect(false);

        // start timing the new question
        setStartTime(getCurrentTime());
    }, [question]);

    const handleAnswerClick = (option) => {
        const endTime = getCurrentTime();
        setTimeTaken(endTime - startTime);

        if (option === answer) {
            console.log("Correct!");
            setCorrect(true);
        }

        setSelectedOption(option);
    };

    return (
        <Card sx={{ padding: 4 }}>
            <CardContent>
                <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
                    {question}
                </Typography>
                <Stack>
                    {options.map((option, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            size="large"
                            sx={{
                                marginTop: 3,
                                fontSize: 26,
                                textTransform: "none",
                                backgroundColor: selectedOption === option && correct ? "green" : selectedOption === option ? "red" : "transparent",
                                color: selectedOption === option ? "white" : "black",
                            }}
                            onClick={() => {
                                handleAnswerClick(option);
                            }}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </Button>
                    ))}
                </Stack>
            </CardContent>
            {correct && <Alert severity="success">Correct!</Alert>}
        </Card>
    );
}
