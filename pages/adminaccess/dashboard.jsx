import { Fragment, useEffect, useState } from "react"
import DataTable from 'react-data-table-component';
import { database } from "@/config/firebase";
import { ref, get, child, remove} from "firebase/database";
import Link from "next/link";

const ActionView = ({property, handleDelete}) => {
    return (
        <div className="d-flex">
            <Link href={{pathname: 'parcels/[parcelId]/view', query: { parcelId: property.id }}}>
                <span className="btn btn-sm btn-primary me-2">View</span>
            </Link>
            <a  href={`/adminaccess/parcels/${property.id}/edit`} className="btn btn-sm btn-success me-2">Edit</a>
            <button className="btn btn-sm btn-danger" onClick={()=> handleDelete(property.id)}>Delete</button>
        </div>
    )
}


const Dashboard = () => {
    const [ parcels, setParcels] =  useState([])

    const handleDelete = (id) => {
        remove(ref(database, `parcels/${id}`)).then(() => {
            getParcels();
        })
    }

    const tableData = parcels;
    const handleContextActions = () => {
    }
    const getParcels = () => {
        const databaseReference = ref(database) 
        get(child(databaseReference, 'parcels')).then((parcels) => {
            if(parcels.exists){
                const getParcelValues = Object.values(parcels.val())
                setParcels(getParcelValues)
                return;
            }
        }).catch((error) =>{
            console.error(error)
        })
    }

    const columns = [
        {
            name: 'Sender Name',
            selector: row => row.senderFullname,
            sortable: true,
        },
        {
            name: "Reciever's Name",
            selector: row => row.recipientFullname,
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
                return <ActionView property={row} handleDelete={handleDelete} />
            },
        }
    ]

    useEffect(() => {
        getParcels();
    }, [])
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <h4>All Couriers</h4>
                        <a href={`/adminaccess/parcels/create`} className="btn btn-sm btn-primary me-2">Create Courier</a>
                    </div>
                </div>
            </div>
            
             <DataTable 
                    columns={columns}
                    data={tableData}
                    selectableRows
                    contextActions={handleContextActions}
                    pagination
                />
        </Fragment>
    )
}


export default Dashboard