import {Stack, Typography} from "@mui/material";

export default function Finished() {

    return (<Stack>
        <Typography variant="h3" sx={{fontWeight: "bold", marginBottom: 2}}>
            Thank you for participating!
        </Typography>
    </Stack>);
}