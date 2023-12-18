import {Card, CircularProgress, Stack, Typography, useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import {selectExperiment} from "./experiment/experimentSlice.jsx";
import {useSelector} from "react-redux";
import axios from "axios";
import {useTranslation} from "react-i18next";

export default function Finished() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {t} = useTranslation();

    const theme = useTheme();
    const experiment = useSelector(selectExperiment);

    useEffect(() => {
        setLoading(true);
        return axios.post('http://localhost:5000/api/experiments', experiment).then(res => {
            console.log(res);
        }).catch(err => {
            setError(err);
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [experiment]);
    return (<Card
        sx={{
            borderRadius: 6, padding: 5, width: 'min(650px, 100%)',
        }}>
        <Stack>
            <Typography variant="h3" sx={{
                fontWeight: "bold", marginBottom: 2, [theme.breakpoints.down('sm')]: {
                    fontSize: 32,
                }
            }}>
                {t("Thank you for participating!")}
            </Typography>
            {loading && <Stack justifyContent={'center'} alignItems={'center'}>
                <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                    {t("Sending your data... Please wait.")}
                </Typography>
                <CircularProgress/>
            </Stack>}
            {error && <Stack justifyContent={'center'} alignItems={'center'}>
                <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                    {t("An error occurred while sending your data. Please notify the experiment conductors, reporting the following text:")}
                </Typography>
                <textarea style={{width: "min(500px, 100%)", height: "200px"}}
                          value={`${error}\n\n${JSON.stringify(experiment)}`}/>
            </Stack>}
            {!loading && !error && <Typography variant="subtitle1">
                {t("Your data has been successfully sent. Thank you for participating!")}
            </Typography>}
        </Stack>
    </Card>);
}