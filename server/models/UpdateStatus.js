const mongoose = require('mongoose');
const UpdateTask = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    }
})

mongoose.model('updateTask', UpdateTask);