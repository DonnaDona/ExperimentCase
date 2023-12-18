import questions_exp from "../../generator/questions.json";
import demo_exp from "../../generator/demo.json";

const sortQuestions = (exp) => {
    exp["warmup"].sort(() => Math.random() - 0.5);
    exp["questions"].sort(() => Math.random() - 0.5);
    return exp;
}

const formatQuestions = (exp) => [...exp["warmup"].map((q) => ({
    ...q, warmup: true
})), ...exp["questions"].map((q) => ({...q, warmup: false}))];

const questions = formatQuestions(sortQuestions(questions_exp));
const demo = formatQuestions(sortQuestions(demo_exp));

export {questions, demo};
