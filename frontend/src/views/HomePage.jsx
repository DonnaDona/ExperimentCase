import React, {useState} from "react";
import {
    Button, Card, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, TextField, Typography,
} from "@mui/material";
import {setPersonData, startExperiment} from "./experiment/experimentSlice.jsx";
import {useDispatch} from "react-redux";

export default function HomePage() {
    const [age, setAge] = useState('');
    const [eyeIssues, setEyeIssues] = useState(false);
    const [dyslexia, setDyslexia] = useState(false);
    const [isNativeEnglishSpeaker, setIsNativeEnglishSpeaker] = useState(false);
    const [programmingExperience, setProgrammingExperience] = useState(0);

    const dispatch = useDispatch();

    const handleCheckboxChange = (event, setterFunction) => {
        setterFunction(event.target.checked);
    };

    const handleProgrammingExperienceChange = (event) => {
        setProgrammingExperience(event.target.value);
    };

    const handleClick = () => {
        console.log("Age: " + age);
        console.log("Eye Issues: " + eyeIssues);
        console.log("Dyslexia: " + dyslexia);
        console.log("Native English Speaker: " + isNativeEnglishSpeaker);
        console.log("Programming Experience: " + programmingExperience);

        dispatch(setPersonData({age, eyeIssues, dyslexia, isNativeEnglishSpeaker, programmingExperience}));

        dispatch(startExperiment());
    }

    return (<Card sx={{padding: 5, width: 'min(600, 100%)', borderRadius: 6}}>
            <Typography variant="h2">Camel or Kebab case?</Typography>
            <Typography variant="h5" sx={{marginY: 2}}>
                Choose the correct spelling for each format.
            </Typography>

            <Typography variant="h6" sx={{marginY: 2}}>For example:</Typography>
            <Typography variant="body1" sx={{marginY: 2}}>
                "peter parker" would be written as "peterParker" in camel case and "peter-parker" in kebab case.
            </Typography>


            <hr/>

            <Stack>
                <Typography variant="h6" sx={{marginY: 2}}>Enter your information:</Typography>
                <FormControl sx={{margin: 2}}>
                    <TextField
                        type="date"
                        label="Date of Birth"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}/>
                </FormControl>

                <FormControlLabel
                    control={<Checkbox checked={eyeIssues}
                                       onChange={(event) => handleCheckboxChange(event, setEyeIssues)}/>}
                    label="Eye Issues"
                    sx={{marginX: 1}}
                />

                <FormControlLabel
                    control={<Checkbox checked={dyslexia}
                                       onChange={(event) => handleCheckboxChange(event, setDyslexia)}/>}
                    label="Dyslexia"
                    sx={{marginX: 1}}
                />

                <FormControlLabel
                    control={<Checkbox checked={isNativeEnglishSpeaker}
                                       onChange={(event) => handleCheckboxChange(event, setIsNativeEnglishSpeaker)}/>}
                    label="Native English Speaker"
                    sx={{marginX: 1}}
                />

                <FormControl sx={{margin: 2}}>
                    <InputLabel id="programming-experience-label">Programming Experience Years</InputLabel>
                    <Select
                        labelId="programming-experience-label"
                        id="programming-experience"
                        value={programmingExperience}
                        label="Programming Experience Years"
                        onChange={handleProgrammingExperienceChange}
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4+</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    sx={{marginY: 2}}
                    onClick={handleClick}
                >
                    Start
                </Button>
            </Stack>
        </Card>);
}
