import './App.css'
import HomePage from "./views/HomePage.jsx";
import QuestionsPage from "./views/QuestionsPage.jsx";
import {useSelector} from "react-redux";
import {selectShowQuestions} from "./views/experiment/experimentSlice.jsx";

function App() {

    const showQuestions = useSelector(selectShowQuestions);

    return (
        <>
            {showQuestions ? <QuestionsPage/> : <HomePage/>}
        </>
    )
}

export default App
