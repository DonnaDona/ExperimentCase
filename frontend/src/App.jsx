import './App.css'
import HomePage from "./views/HomePage.jsx";
import QuestionsPage from "./views/QuestionsPage.jsx";
import {useSelector} from "react-redux";
import {selectIsDemo, selectIsRunning, selectIsNotStarted} from "./views/experiment/experimentSlice.jsx";
import {Stack, useTheme} from "@mui/material";
import Finished from "./views/Finished.jsx";

import {questions, demo} from "./questions.js";

function App() {
    const isDemo = useSelector(selectIsDemo);
    const isRunning = useSelector(selectIsRunning);
    const isNotStarted = useSelector(selectIsNotStarted);
    const theme = useTheme();

    const visibleView = () => {
        if (isNotStarted) {
            return (<HomePage/>);
        } else if (isDemo) {
            return (<QuestionsPage questions={demo} demo={true}/>);
        } else if (isRunning) {
            return (<QuestionsPage questions={questions}/>);
        } else {
            return (<Finished/>);
        }
    }

    return (<Stack justifyContent={"center"} sx={{
        padding: 0, [theme.breakpoints.up('md')]: {
            padding: 2,
        },
    }}>
        <div style={{
            maxWidth: '100%', overflowX: 'hidden', display: 'flex', alignContent: 'center', justifyContent: 'center'
        }}>
            {visibleView()}
        </div>
    </Stack>)
}

export default App
