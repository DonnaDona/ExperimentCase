import './App.css'
import HomePage from "./views/HomePage.jsx";
import QuestionsPage from "./views/QuestionsPage.jsx";
import {useSelector} from "react-redux";
import {selectIsRunning, selectIsNotStarted} from "./views/experiment/experimentSlice.jsx";
import {Stack} from "@mui/material";
import Finished from "./views/Finished.jsx";

function App() {

    const isRunning = useSelector(selectIsRunning);
    const isNotStarted = useSelector(selectIsNotStarted);

    const visibleView = () => {
        if (isNotStarted) {
            return (<HomePage/>);
        } else if (isRunning) {
            return (<QuestionsPage/>);
        } else {
            return (<Finished/>);
        }
    }

    return (<Stack justifyContent={"center"}>
        <div style={{maxWidth: "min(100%, 800px)", margin: "auto"}}>
            {visibleView()}
        </div>
    </Stack>)
}

export default App
