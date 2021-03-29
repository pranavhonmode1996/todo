import axios from "axios";
import {
  Task_Error,
  Task_Process,
  Task_Request,
  Get_Task_Request,
  Get_Task_Process,
  Get_Task_Error,
  Update_Task_Request,
  Update_Task_Process,
  Update_Task_Error,
} from "../actionTypes/ActionTypes";

export const postTask = (
  taskName,
  taskDetails,
  startDate,
  endDate,
  identificationNumber,
  assignTo
) => async (dispatch) => {
  dispatch({
    type: Task_Request,
  });

  console.log(
    taskName,
    taskDetails,
    startDate,
    endDate,
    identificationNumber,
    assignTo
  );

  try {
    const task = await axios.post("http://192.168.43.163:4000/task", {
      taskName,
      taskDetails,
      startDate,
      endDate,
      identificationNumber,
      assignTo,
    });
    dispatch({
      type: Task_Process,
    });
  } catch (error) {
    dispatch({
      type: Task_Error,
      payload: error.message,
    });
  }
};

export const getTasks = () => async (dispatch) => {
  dispatch({
    type: Get_Task_Request,
  });

  try {
    const task = await axios.get("http://192.168.43.163:4000/getTask");
    dispatch({
      type: Get_Task_Process,
      payload: task.data,
    });
  } catch (error) {
    dispatch({
      type: Get_Task_Error,
      payload: error.message,
    });
  }
};

export const updateStatus = (id, status) => async (dispatch) => {
  dispatch({
    type: Update_Task_Request,
  });

  try {
    await axios.post("http://192.168.43.163:4000/updateStatus", id, status);
    dispatch({
      type: Update_Task_Process,
    });
  } catch (error) {
    dispatch({
      type: Update_Task_Error,
      payload: error.message,
    });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.post("http://192.168.43.163:4000/deleteTask", id);
  } catch (error) {
    console.log(error);
  }
};
