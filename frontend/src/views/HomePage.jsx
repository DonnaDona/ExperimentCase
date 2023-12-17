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
import {setPersonData, startDemo, startExperiment} from "./experiment/experimentSlice.jsx";
import {useDispatch} from "react-redux";
import Form from "../components/Form.jsx";

export default function HomePage() {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [state, setState] = useState(0);

    const onSubmit = (formData) => {
        dispatch(setPersonData(formData));

        dispatch(startExperiment());
    }

    return (<Card
        sx={{
            borderRadius: 0, padding: 3, paddingTop: 4, [theme.breakpoints.up('sm')]: {
                borderRadius: 6, padding: 5,
            }, width: 'min(600px, 100%)',
        }}>
        <Typography variant="h3">Camel or Kebab case?</Typography>
        <Typography variant="h6" sx={{marginTop: 2}}>A study on the readability of different naming
            conventions.</Typography>
        {state === 0 && <>
            <Stack>

                <Typography variant="body1" sx={{marginTop: 2}}>
                    This study is conducted in the context of a project for the course <i>Experimentation and
                    Evaluation</i>.
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    You will be shown 2 words separated by a white space and 4 options written in some
                    naming convention. Your task is to select the option that rewrites the
                    original 2 words in that naming convention.
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    Your task is to select the correct option in the least amount of time possible, while
                    maintaining a high accuracy.
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    This study will take approximately 5 minutes to complete.
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    First, we need to collect some information about you.
                </Typography>
                <Button sx={{marginTop: 2}} variant="contained" onClick={() => setState(1)}>Continue</Button>
            </Stack>
            <hr style={{marginTop: 16, marginBottom: 16}}/>
            <Typography variant="body1" sx={{marginTop: 1}}>
                Not clear? Try the demo mode using the button below.<br/>
                The demo can be stopped at any time by clicking the "Stop" button.
            </Typography>
            <Typography variant="body1" sx={{marginTop: 1}}>
                <i>Note</i>: The demo will show you whether your answer is correct or not; this will not be the case
                during the actual experiment.
            </Typography>
            <Button sx={{marginTop: 2}} variant="outlined" onClick={() => dispatch(startDemo())}>Demo</Button>
        </>}

        {state === 1 && <div
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingLeft: 8, paddingRight: 8}}>
            <Form onSubmit={onSubmit}/>
        </div>}

    </Card>);
}
