const { json } = require("body-parser");
const express = require("express");
const taskRouter = express.Router();
const mongoose = require("mongoose");
const Task = mongoose.model("task");
const UpdateTask = mongoose.model("updateTask");
taskRouter.post("/task", async (req, res) => {
  const {
    taskName,
    taskDetails,
    startDate,
    endDate,
    identificationNumber,
    assignTo
  } = req.body;

  const task = new Task({
    taskName: taskName,
    taskDetails: taskDetails,
    startDate: startDate,
    endDate: endDate,
    identificationNumber: identificationNumber,
    assignTo: assignTo,
    taskStatus: 'Incomplete',
  });
    await task
      .save()
      .then((success) => res.send({ success: "Task added successfully...." }));
});

taskRouter.get("/getTask", async (req, res) => {
  const task = await Task.find({});
  if (task) {
    res.send({ data: task });
    console.log(task);
  } else {
    res.send({ error: "something is wrong...." });
  }
});

taskRouter.post('/updateStatus', async(req, res) => {
  const {id, status} = req.body;
  if(!id) {
    res.send({error: "Task not found"});
  } else {
    let myQuery = {_id: id};
    let newValues = {$set: {status: status}};
    Task.updateOne(myQuery, newValues, (err, res) => {
      if(err) throw err;
      return res;
    })
  }
})

taskRouter.post('/deleteTask', async(req, res) => {
  const {id} = req.body;
  if(!id) {
    res.send({error: "Task not found"});
  } else {
    const task = Task.deleteOne({_id: id}, (err, res) => {
      if(err) throw err;
      return res;
    });
  }
})

module.exports = taskRouter;