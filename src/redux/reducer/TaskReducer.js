import {
  Get_Task_Error,
  Get_Task_Process,
  Get_Task_Request,
  Task_Error,
  Task_Process,
  Task_Request,
} from "../actionTypes/ActionTypes";

export const postTaskReducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case Task_Request:
      return { isLoading: true };
    case Task_Process:
      return { isLoading: false };
    case Task_Error:
      return { isLoading: false };
    default:
      return { ...state };
  }
};

export const getTaskReducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case Get_Task_Request:
      return { isLoading: true };
    case Get_Task_Process:
      return { isLoading: false, tasks: action.payload.data };
    case Get_Task_Error:
      return { isLoading: false, error: action.payload };
    default:
      return { ...state };
  }
};
