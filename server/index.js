const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const {MONGOURI} = require('./key/key');
require('./models/Task.js');
require('./models/UpdateStatus.js');
require('./models/DeleteTask.js');
const Task = require('./routes/Task.js');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(Task);

mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
  console.log('connected to mongodb database');
});

mongoose.connection.on('error', (error) => {
  console.log('error occurred', error);
});


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});
