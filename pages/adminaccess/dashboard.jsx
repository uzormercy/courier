import { Fragment } from "react"
import DataTable from 'react-data-table-component';

const ActionView = ({property}) => {
    return (
        <div className="d-flex">
            <a className="btn btn-sm btn-primary me-2">View</a>
            <a className="btn btn-sm btn-success me-2">Edit</a>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}


const Dashboard = () => {
    const columns = [
        {
            name: 'Sender Name',
            selector: row => row.senderName,
            sortable: true,
        },
        {
            name: "Reciever's Name",
            selector: row => row.recieverName,
            sortable: true,
        },
        {
            name: 'Tracking Number',
            selector: row => row.trackingCode,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: '',
            selector: row => {
                return <ActionView property={row} />
            },
        }
    ]

    const tableData = [
        {
            id: 1,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 2,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 3,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 4,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 5,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 6,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 7,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 8,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 9,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        {
            id: 10,
            senderName: 'Sender Name',
            recieverName: "Reciever's Name",
            trackingCode: "UJDS423JD",
            status: "In Transition"
        },
        
    ]
    const handleContextActions = () => {
    }
    return (
        <Fragment>
             <DataTable 
                    columns={columns}
                    data={tableData}
                    selectableRows
                    contextActions={handleContextActions}
                    // pagination
                />
        </Fragment>
    )
}


export default Dashboard