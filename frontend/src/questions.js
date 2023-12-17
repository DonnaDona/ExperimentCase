import questions_exp from "../../generator/questions.json";
import demo_exp from "../../generator/demo.json";

const formatQuestions = (exp) => [...exp["warmup"].map((q) => ({
    ...q,
    warmup: true
})), ...exp["questions"].map((q) => ({...q, warmup: false}))];

const questions = formatQuestions(questions_exp);
const demo = formatQuestions(demo_exp);

export {questions, demo};
