const mongoose = require('mongoose');
const DeleteTask = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    }
})

mongoose.model('deleteTask', DeleteTask);