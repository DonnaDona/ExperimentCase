import questions_exp from "../../generator/questions.json";
import demo_exp from "../../generator/demo.json";

const formatQuestions = (exp) => [...exp["warmup"].map((q) => ({
    ...q, warmup: true
})), ...exp["questions"].map((q) => ({...q, warmup: false}))];

const questions = formatQuestions(questions_exp);
const demo = formatQuestions(demo_exp);

// shuffle
questions.sort(() => Math.random() - 0.5);
demo.sort(() => Math.random() - 0.5);

export {questions, demo};
