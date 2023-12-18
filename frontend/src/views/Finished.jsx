import {Card, CircularProgress, Stack, Typography, useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import {selectExperiment} from "./experiment/experimentSlice.jsx";
import {useSelector} from "react-redux";
import axios from "axios";
import {useTranslation} from "react-i18next";

const generateStats = (experiment) => {
    const stats = {
        correct: 0, total: 0, averageWhiteSpaceTime: 0, averageCamelCaseTime: 0, averageKebabCaseTime: 0,
    };
    const {answers} = experiment;
    stats.total = answers.length;

    const times = {"camel": [0, 0], "kebab": [0, 0], "space": [0, 0]};

    for (const question of answers) {
        if (question["correct"]) stats.correct++;

        if (question["warmup"]) continue;

        switch (question["format"]) {
            case "space":
                times["space"][0] += question["time"];
                times["space"][1]++;
                break;
            case "camelCase":
                times["camel"][0] += question["time"];
                times["camel"][1]++;
                break;
            case "kebab-case":
                times["kebab"][0] += question["time"];
                times["kebab"][1]++;
                break;
        }
    }

    stats.averageWhiteSpaceTime = times["space"][0] / times["space"][1];
    stats.averageCamelCaseTime = times["camel"][0] / times["camel"][1];
    stats.averageKebabCaseTime = times["kebab"][0] / times["kebab"][1];

    return stats;
};

export default function Finished() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {t} = useTranslation();

    const theme = useTheme();
    const experiment = useSelector(selectExperiment);
    const stats = generateStats(experiment);

    useEffect(() => {
        setLoading(true);
        return axios.post('/api/experiments', experiment).then(res => {
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
            <Typography variant="h5" sx={{fontWeight: 'bold', marginBottom: 1}}>
                {t("Your stats")}
            </Typography>

            <Typography variant="subtitle1" sx={{marginBottom: 0}}>
                {t("Correct answers")}: <b>{stats.correct} / {stats.total}</b>
            </Typography>
            <Typography variant="subtitle1" sx={{marginBottom: 0}}>
                {t("Average time for white space")}: <b>{(stats.averageWhiteSpaceTime / 1000).toFixed(2)} s</b>
            </Typography>
            <Typography variant="subtitle1" sx={{marginBottom: 0}}>
                {t("Average time for camelCase")}: <b>{(stats.averageCamelCaseTime / 1000).toFixed(2)} s</b>
            </Typography>
            <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                {t("Average time for kebab-case")}: <b>{(stats.averageKebabCaseTime / 1000).toFixed(2)} s</b>
            </Typography>
            <hr width={'100%'}/>
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