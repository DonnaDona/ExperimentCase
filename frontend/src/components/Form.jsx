import {
    Button, Checkbox, FormControl, FormControlLabel, FormLabel, Icon, Stack, TextField, Tooltip, Typography
} from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import React, {useState} from "react";
import LanguagesPicker from "./LangaguesPicker.jsx";
import {useTranslation} from "react-i18next";

const leftAlignedStyle = {
    textAlign: 'start'
};

export default function Form({onSubmit}) {
    const [age, setAge] = useState('');
    const [eyeIssues, setEyeIssues] = useState(false);
    const [dyslexia, setDyslexia] = useState(false);
    const [isEnglishSpeaker, setIsEnglishSpeaker] = useState(false);
    const [programmingExperience, setProgrammingExperience] = useState(0);
    const [languages, setLanguages] = useState([]);

    // error handling
    const [ageError, setAgeError] = useState(false);
    const [programmingExperienceError, setProgrammingExperienceError] = useState(false);

    const {t} = useTranslation();

    const handleClick = () => {
        if (age === '') {
            setAgeError(t("Age is required"));
            return;
        }
        if (programmingExperience === '') {
            setProgrammingExperienceError(t("Programming experience is required"));
            return;
        }
        onSubmit({age, eyeIssues, dyslexia, isEnglishSpeaker, programmingExperience, languages});
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
        if (event.target.value === '') {
            setAgeError(t("Age is required"));
        } else {
            setAgeError(false);
        }
    }

    const handleProgrammingExperienceChange = (event) => {
        setProgrammingExperience(event.target.value);
        if (event.target.value === '') {
            setProgrammingExperienceError(t("Programming experience is required"));
        } else {
            setProgrammingExperienceError(false);
        }
    }

    return (

        <Stack width={'100%'} maxWidth={'350px'} sx={{gap: 1}}>
            <Typography variant="h6" sx={{marginY: 2}}>{t("Enter your information:")}</Typography>
            <FormControl sx={leftAlignedStyle}>
                <FormLabel component="legend"
                           error={ageError}>
                    {t("Age")}
                </FormLabel>
                <TextField
                    size={"small"}
                    type="number"
                    variant="outlined"
                    value={age}
                    required
                    error={ageError}
                    helperText={ageError}
                    onChange={handleAgeChange}
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
                label={t("Eye Issues")}
            />

            <FormControlLabel
                control={<Checkbox checked={dyslexia}
                                   onChange={(event) => setDyslexia(event.target.checked)}/>}
                label={t("Dyslexia")}
            />

            <FormControlLabel
                control={<Checkbox checked={isEnglishSpeaker}
                                   onChange={(event) => setIsEnglishSpeaker(event.target.checked)}/>}
                label={t("Fluent English Speaker")}
            />

            <FormControl sx={leftAlignedStyle}>
                <FormLabel component="legend"
                           error={programmingExperienceError}>
                    {t("Programming Experience")}</FormLabel>
                <TextField
                    size={"small"}
                    type="number"
                    variant="outlined"
                    value={programmingExperience}
                    required
                    error={programmingExperienceError}
                    onChange={handleProgrammingExperienceChange}
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
                    <span>{t("Programming Languages")}</span>
                </FormLabel>
                <LanguagesPicker value={languages} onChange={setLanguages}/>
            </FormControl>

            <Button
                variant="contained"
                sx={{marginY: 2}}
                onClick={handleClick}
            >
                {t("Start")}
            </Button>
        </Stack>);
}