const Week = require('../models/week');

module.exports = {
    create
};

async function create(req, res) {
    const week = await Week.create(req.body);
    res.status(201).json(week);
}