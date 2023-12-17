import React, {useState} from "react";
import {
    Button,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import {setPersonData, startExperiment} from "./experiment/experimentSlice.jsx";
import {useDispatch} from "react-redux";
import Form from "../components/Form.jsx";

export default function HomePage() {
    const [age, setAge] = useState('');
    const [eyeIssues, setEyeIssues] = useState(false);
    const [dyslexia, setDyslexia] = useState(false);
    const [isNativeEnglishSpeaker, setIsNativeEnglishSpeaker] = useState(false);
    const [programmingExperience, setProgrammingExperience] = useState(0);
    const theme = useTheme();

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

    return (<Card 
        sx={{
            borderRadius: 0,
            padding: 2,
            [theme.breakpoints.up('md')]: {
                borderRadius: 6,
                padding: 5,
            },
            width: 'min(600, 100%)', 
            }}>
        <Typography variant="h2">Camel or Kebab case?</Typography>
        <Typography variant="h5" sx={{marginY: 2}}>
            Choose the correct spelling for each format.
        </Typography>

        <Typography variant="h6" sx={{marginY: 2}}>For example:</Typography>
        <Typography variant="body1" sx={{marginY: 2}}>
            "peter parker" would be written as "peterParker" in camel case and "peter-parker" in kebab case.
        </Typography>


        <hr/>

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingLeft: 8, paddingRight: 8}}>
            <Form/>
        </div>

    </Card>);
}
