import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTasks } from '../redux/actions/TaskActions';
import { updateStatus } from '../redux/actions/TaskActions';
import InfoModal from './InfoModal';
const Table = (props) => {
    const dispatch = useDispatch();
    const taskData = useSelector(state => state.getTaskReducer);
    const { tasks } = taskData;
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});
    const [search, setSearch] = useState("");
    const handleUpdateStatus = (id, status) => {
        dispatch(updateStatus(id, status));
        dispatch(getTasks());
    }
    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
        dispatch(getTasks());
    }
    const handleModal = (value) => {
        modal ? setModal(false) : setModal(true);
    }
    const handleInfo = (info) => {
        setData(info);
    }
    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);
    return (
        <div>
            <div className="searchContainer">
                <input type="text" placeholder="Search by status" onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="table">
                {modal ? <InfoModal press={(value) => handleModal(value)} data={data} /> : null}
                <table cellspacing={20} cellpadding={20}>
                    <tr>
                        <th>Sr.No</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    {(tasks !== undefined) ? tasks.map((task, key) => {
                        if(task !== "" && task.status.indexOf(search) === -1) {
                            return null
                        }
                        return (<tr>
                            <td>{key + 1}</td>
                            <td>{task.taskName}</td>
                            <td>{task.status}</td>
                            <td>
                                <button onClick={() => handleUpdateStatus({ id: task._id, status: task.status === 'Incomplete' ? 'Complete' : 'Incomplete' })}><i class="fas fa-check-square"></i></button>
                                <button onClick={handleModal} onMouseEnter={() => handleInfo(task)}><i class="fas fa-eye"></i></button>
                                <button onClick={() => handleDeleteTask({ id: task._id })}><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>)
                    }) : null}
                </table>
            </div>
        </div>
    )
}

export default Table;