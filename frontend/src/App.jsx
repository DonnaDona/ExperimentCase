import './App.css'
import HomePage from "./views/HomePage.jsx";
import QuestionsPage from "./views/QuestionsPage.jsx";
import {useSelector} from "react-redux";
import {selectShowQuestions} from "./views/experiment/experimentSlice.jsx";
import {Stack} from "@mui/material";

function App() {

    const showQuestions = useSelector(selectShowQuestions);

    return (<Stack justifyContent={"center"}>
            <div style={{maxWidth: "min(100%, 800px)", margin: "auto"}}>
                {showQuestions ? <QuestionsPage/> : <HomePage/>}
            </div>
        </Stack>)
}

export default App
