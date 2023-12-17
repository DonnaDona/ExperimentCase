const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    qid: {type: String, required: true},
    answer: {type: String, required: true},
    answerIndex: {type: Number, required: true},
    time: {type: Number, required: true},
    format: {type: String, required: true},
});
const Answer = mongoose.model('Question', answerSchema);

const formSchema = new mongoose.Schema({
    age: {type: Number, required: true, min: [16, 'You must be at least 16 years old'], max: 110},
    eyeIssues: {type: Boolean, required: true},
    dyslexia: {type: Boolean, required: true},
    isNativeEnglishSpeaker: {type: Boolean, required: true},
    programmingExperience: {type: Number, required: true, min: 0, max: 50},
    languages: {
        type: [String],
        enum: ['C/C++', 'C#', 'CSS', 'HTML', 'Java', 'Python', 'Rust', 'Other'],
        default: [],
    },
});
const Form = mongoose.model('Form', formSchema);

const experimentSchema = new mongoose.Schema({
    answers: {type: [answerSchema], required: true}, form: {type: formSchema, required: true}
});
const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = {Question: Answer, Form, Experiment};