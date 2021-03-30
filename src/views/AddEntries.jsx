import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks, postTask } from '../redux/actions/TaskActions';
import userData from '../Users.json';
const AddEntries = (props) => {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [identificationNumber, setIdentificationNumber] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [idError, setIdError] = useState(false);

    const handleTaskSubmit = () => {
        if (!taskName || !taskDetails || !startDate || !endDate || !identificationNumber || !assignTo) {
            setIsEmpty(true);
        } else if(!userData.users.find(user => user.userId == identificationNumber)) {
            setIdError(true);
        } else {
            setTaskName("");
            setTaskDetails("");
            setStartDate("");
            setEndDate("");
            setIdentificationNumber("");
            setAssignTo("");
            dispatch(postTask(taskName, taskDetails, startDate, endDate, identificationNumber, assignTo));
            setIsEmpty(false);
            setIsConfirm(true);
            setIdError(false);

            setInterval(() => {
                setIsConfirm(false);
            }, 2000);
        }
    };

    return (
        <html>
            <body>
                <div className="entriesContainer">
                    {isEmpty && <p>All fields are required</p>}
                    {isConfirm && <p>Task Added Successfully</p>}
                    {idError && <p>Identification Number should be 1111, 2222, ...8888</p>}
                    <input className="firstInput" type="text" placeholder="Task name" onChange={e => setTaskName(e.target.value.charAt(0).toUpperCase())} maxLength={80} />
                    <textarea placeholder="Task details" rows={2} onChange={e => setTaskDetails(e.target.value)} />
                    <div className="inputs">
                        <input type="date" placeholder="Start date" onChange={e => setStartDate(e.target.value)} />
                        <input type="date" placeholder="End date" onChange={e => setEndDate(e.target.value)} />
                        <input type="text" placeholder="Task assign to ( Identification number )" onChange={e => setIdentificationNumber(e.target.value)} maxLength={4} minLength={4} />
                        <input type="decimal" placeholder="Task assign to" onChange={e => setAssignTo(e.target.value)} />
                    </div>
                    <div className="submitButton">
                        <button type="button" onClick={() => handleTaskSubmit()}>Add Task</button>
                    </div>
                </div>
            </body>
        </html>
    )
}
export default AddEntries;