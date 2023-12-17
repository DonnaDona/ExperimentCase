const express = require('express');
const router = express.Router();

const {Question, Form, Experiment} = require('../models');

router.post('/experiments', async (req, res) => {
    const experiment = new Experiment(req.body);
    await experiment.save();
    res.json(experiment);
});

router.get('/experiments', async (req, res) => {
    const experiments = await Experiment.find();
    res.json(experiments);
});

module.exports = router;