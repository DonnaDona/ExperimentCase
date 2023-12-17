import {
    Button, Checkbox, FormControl, FormControlLabel, FormLabel, Icon, Stack, TextField, Tooltip, Typography
} from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import React, {useState} from "react";
import LanguagesPicker from "./LangaguesPicker.jsx";

const leftAlignedStyle = {
    textAlign: 'start'
};

export default function Form() {
    const [age, setAge] = useState('');
    const [eyeIssues, setEyeIssues] = useState(false);
    const [dyslexia, setDyslexia] = useState(false);
    const [isEnglishSpeaker, setIsEnglishSpeaker] = useState(false);
    const [programmingExperience, setProgrammingExperience] = useState('');
    const [languages, setLanguages] = useState([]);

    const handleClick = () => {
        console.log("Age: " + age);
        console.log("Eye Issues: " + eyeIssues);
        console.log("Dyslexia: " + dyslexia);
        console.log("Native English Speaker: " + isEnglishSpeaker);
        console.log("Programming Experience: " + programmingExperience);
        console.log("Languages: " + languages);
    }

    return (

        <Stack width={'100%'} maxWidth={'350px'} sx={{gap: 1}}>
            <Typography variant="h6" sx={{marginY: 2}}>Enter your information:</Typography>
            <FormControl sx={leftAlignedStyle}>
                <FormLabel component="legend">Age</FormLabel>
                <TextField
                    size={"small"}
                    type="number"
                    variant="outlined"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {min: 0, max: 110}, endAdornment: "years"
                    }}
                />
            </FormControl>

            <FormControlLabel
                control={<Checkbox checked={eyeIssues}
                                   onChange={(event) => setEyeIssues(event.target.checked)}/>}
                label="Eye Issues"
            />

            <FormControlLabel
                control={<Checkbox checked={dyslexia}
                                   onChange={(event) => setDyslexia(event.target.checked)}/>}
                label="Dyslexia"
            />

            <FormControlLabel
                control={<Checkbox checked={isEnglishSpeaker}
                                   onChange={(event) => setIsEnglishSpeaker(event.target.checked)}/>}
                label="Native English Speaker"
            />

            <FormControl sx={leftAlignedStyle}>
                <FormLabel component="legend">Programming Experience</FormLabel>
                <TextField
                    size={"small"}
                    type="number"
                    variant="outlined"
                    value={programmingExperience}
                    required
                    onChange={(event) => setProgrammingExperience(event.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {min: 0, max: 50}, endAdornment: "years"
                    }}
                />
            </FormControl>

            <FormControl sx={leftAlignedStyle}>
                <FormLabel component="legend">
                    <span>Programming Languages</span>
                </FormLabel>
                <LanguagesPicker value={languages} onChange={setLanguages}/>
            </FormControl>

            <Button
                variant="contained"
                sx={{marginY: 2}}
                onClick={handleClick}
            >
                Start
            </Button>
        </Stack>);
}