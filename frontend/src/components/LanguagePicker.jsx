import {useTranslation} from "react-i18next";
import {Card, MenuItem, Stack, Select, useTheme, Typography} from "@mui/material";

export default function LanguagePicker() {
    const {t, i18n} = useTranslation();
    const theme = useTheme();

    const changeLanguage = (lng) => {
        localStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    };

    return (<Stack direction={"row"} alignItems={"center"}>
        <Typography variant={"h6"} sx={{paddingRight: 2, display: 'block',
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            }
        }}>{t("Language")}</Typography>
        <Select
            style={{height: 'min-content', width: '100%', minWidth: '110px'}}
            size={"small"}
            value={i18n.language}
            variant={"filled"}
            onChange={(event) => changeLanguage(event.target.value)}
            MenuProps={{
                PaperProps: {
                    style: {
                        maxHeight: 300,
                    },
                },
            }}
            SelectDisplayProps={{
                style: {
                    paddingTop: 1,
                    paddingBottom: 1,
                },
            }}
            sx={{paddingY: 1}}
        >
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'it'}>Italiano</MenuItem>
        </Select>
    </Stack>);
}