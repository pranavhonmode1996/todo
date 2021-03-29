import React from 'react';
import InfoModal from '../reusableComponents/InfoModal';
import Table from '../reusableComponents/Table';
import AddEntries from './AddEntries';
const Dashboard = () => {
    return (
        <html>
            <body>
                <AddEntries />
                <div className="tableContainer">
                    <div>
                        <Table />
                    </div>
                </div>
            </body>
        </html>
    )
}

export default Dashboard;