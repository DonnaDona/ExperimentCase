import questions_exp from "../../generator/questions.json";
import demo_exp from "../../generator/demo.json";

const formatQuestions = (exp) => [...exp["warmup"], ...exp["questions"],]

const questions = formatQuestions(questions_exp);
const demo = formatQuestions(demo_exp);

export { questions, demo };
