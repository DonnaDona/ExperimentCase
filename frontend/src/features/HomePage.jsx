import React, {useState} from "react";
import {
    Button,
    Card,
    Checkbox, FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";

export default function HomePage() {
    const [age, setAge] = useState('');
    const [eyeIssues, setEyeIssues] = useState(false);
    const [dyslexia, setDyslexia] = useState(false);
    const [isNativeEnglishSpeaker, setIsNativeEnglishSpeaker] = useState(false);
    const [programmingExperience, setProgrammingExperience] = useState('');

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


    }

    return (
        <Card sx={{padding: 5, bgcolor: '#e8ecfa', width: 650}}>
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
                <FormControl fullWidth>
                    <InputLabel id="age-label">Age</InputLabel>

                    <Select
                    labelId="age-label"
                    id="age"
                    value={age}
                    label="Age"
                    onChange={(event) => setAge(event.target.value)}
                >
                    <MenuItem value={10}>1-18</MenuItem>
                    <MenuItem value={20}>19-29</MenuItem>
                    <MenuItem value={30}>30-49</MenuItem>
                    <MenuItem value={40}>50+</MenuItem>
                </Select>
                </FormControl>

                <FormControlLabel
                    control={<Checkbox checked={eyeIssues}
                                       onChange={(event) => handleCheckboxChange(event, setEyeIssues)}/>}
                    label="Eye Issues"
                />

                <FormControlLabel
                    control={<Checkbox checked={dyslexia}
                                       onChange={(event) => handleCheckboxChange(event, setDyslexia)}/>}
                    label="Dyslexia"
                />

                <FormControlLabel
                    control={<Checkbox checked={isNativeEnglishSpeaker}
                                       onChange={(event) => handleCheckboxChange(event, setIsNativeEnglishSpeaker)}/>}
                    label="Native English Speaker"
                />

                <FormControl fullWidth>
                <InputLabel id="programming-experience-label">Programming Experience</InputLabel>
                <Select
                    labelId="programming-experience-label"
                    id="programming-experience"
                    value={programmingExperience}
                    label="Programming Experience"
                    onChange={handleProgrammingExperienceChange}
                >
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="advanced">Advanced</MenuItem>
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
        </Card>
    );
}
