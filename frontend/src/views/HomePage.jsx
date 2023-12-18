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
import {useTranslation} from "react-i18next";
import LanguagePicker from "../components/LanguagePicker.jsx";

export default function HomePage() {
    const {t} = useTranslation();
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
            }, width: 'min(650px, 100%)',
        }}>
        <Stack sx={{flexDirection: "row", justifyContent: "space-between", [theme.breakpoints.down('sm')]: {
            flexDirection: "column-reverse", justifyContent: "center", gap: 4
        }}}>

            <Typography variant="h3">{t("Camel or Kebab case?")}</Typography>

            <LanguagePicker/>
        </Stack>
        <Typography variant="h6"
                    sx={{marginTop: 2}}>{t("A study on the readability of different naming conventions.")}</Typography>
        {state === 0 && <>
            <Stack>

                <Typography variant="body1" sx={{marginTop: 2}}>
                    {t("This study is conducted in the context of a project for the course ")}<i>Experimentation and
                    Evaluation</i>.
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    {t("You will be shown 2 words separated by a white space, and 4 options written in some naming convention. Your task is to select, in the least time possible, the option that rewrites the original 2 words in that naming convention.")}
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    {t("For example, the words \"hello world\" can be rewritten in camel case as \"helloWorld\" or in kebab case as \"hello-world\".")}
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    {t("This study will take approximately 5 minutes to complete. Please do not take breaks during the study, as this will affect the results. Do not refresh the page or close the browser tab. Make sure you do not have any active translation extensions.")}
                </Typography>
                <Typography variant="body1" sx={{marginTop: 1}}>
                    {t("It is highly suggested to try the demo mode first, to check whether you understand the task properly and get used to the environment.")}
                </Typography>   
                <Typography variant="body1" sx={{marginTop: 1}}>
                    {t("First, we need to collect some information about you.")}
                </Typography>
                <Button sx={{marginTop: 2}} variant="contained" onClick={() => setState(1)}>{t("Continue")}</Button>
            </Stack>
            <hr style={{marginTop: 16, marginBottom: 16}}/>
            <Typography variant="body1" sx={{marginTop: 1}}>
                {t("Not clear? Try the demo mode using the button below.")}<br/>
                {t("The demo can be stopped at any time by clicking the \"Stop\" button.")}
            </Typography>
            <Typography variant="body1" sx={{marginTop: 1}}>
                <i><b>{t("Note")}</b></i>: {t("The demo will show you whether your answer is correct or not; this will not be the case during the actual experiment.")}
            </Typography>
            <Button sx={{marginTop: 2}} variant="outlined" onClick={() => dispatch(startDemo())}>Demo</Button>
        </>}

        {state === 1 && <div
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingLeft: 8, paddingRight: 8}}>
            <Form onSubmit={onSubmit}/>
        </div>}

    </Card>);
}
