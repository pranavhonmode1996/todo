const mongoose = require('mongoose');
const Task = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDetails: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    identificationNumber: {
        type: String,
        required: true
    },
    assignTo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Incomplete'
    }
})

mongoose.model('task', Task);