import React, { useEffect, useState } from 'react';
import userData from '../Users.json';
const InfoModal = (props) => {
    const [assignTo, setAssignTo] = useState("");
    const [designation, setDesignation] = useState("");
    const [experience, setExperience] = useState("");
    const {taskName, taskDetails, startDate, endDate, identificationNumber, status} = props.data;

    useEffect(() => {
        userData.users.map((user) => {
            if(user.userId == identificationNumber) {
                setAssignTo(user.userName);
                setDesignation(user.designation);
                setExperience(user.experience);
            }
        })
    }, [])
    return (
        <div className="infoModal">
            <p><strong>Assign To: </strong>{assignTo}</p>
            <p><strong>Identification Number: </strong>{identificationNumber}</p>
            <p><strong>Designation: </strong>{designation}</p>
            <p><strong>Experience: </strong>{experience}</p>
            <p><strong>Task Name: </strong>{taskName}</p>
            <p><strong>Task Details: </strong>{taskDetails}</p>
            <p><strong>Task Start Date: </strong>{startDate}</p>
            <p><strong>Expected End Date: </strong>{endDate}</p>
            <p><strong>Task Status: </strong>{status}</p>
            <button onClick={() => props.press(false)}>Okay</button>
        </div>
    )
}

export default InfoModal;