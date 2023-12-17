import {Box, Checkbox, Chip, FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const languages = ['C/C++', 'C#', 'CSS', 'HTML', 'Java', 'Python', 'Rust', 'Other'];
export default function LanguagesPicker({onChange, value}) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (<>
        <Select
            size={"small"}
            value={value}
            onChange={handleChange}
            multiple
            MenuProps={{
                PaperProps: {
                    style: {
                        maxHeight: 300,
                    },
                },
            }}
            renderValue={(selected) => (<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                    {selected.map((value) => (<Chip key={value} label={value} size={"small"}/>))}
                </Box>)}
        >
            {languages.map((language) => <MenuItem key={language} value={language}>
                <Checkbox checked={value.indexOf(language) > -1}/>
                {language}
            </MenuItem>)}
        </Select>
        <FormHelperText sx={{textAlign: 'start'}}>Select all languages you are familiar with.</FormHelperText>
    </>);

}