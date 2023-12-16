const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {type: String, required: true},
    textCase: {type: String, enum: ['camelCase', 'kebab-case', 'control'], required: true},
    correct: {type: Boolean, required: true},
    time: {type: Number, required: true}
});
const Question = mongoose.model('Question', questionSchema);

const formSchema = new mongoose.Schema({
    age: {type: Number, required: true, min: [16, 'You must be at least 16 years old'], max: 110},
    eyeIssues: {type: Boolean, required: true},
    dyslexia: {type: Boolean, required: true},
    nativeEnglish: {type: Boolean, required: true},
    programmingExperience: {type: Number, required: true, min: 0, max: 50},
    languages: {
        type: [String],
        required: true,
        enum: ['C', 'C++', 'C#', 'CSS', 'HTML', 'Java', 'JavaScript', 'PHP', 'Python', 'Rust', 'Other']
    },
});
const Form = mongoose.model('Form', formSchema);

const experimentSchema = new mongoose.Schema({
    questions: {type: [questionSchema], required: true}, form: {type: formSchema, required: true}
});
const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = {Question, Form, Experiment};