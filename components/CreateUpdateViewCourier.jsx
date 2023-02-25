import { Fragment } from "react"
import { useForm } from "react-hook-form";
import { database } from "@/config/firebase";
import { ref, push, set, child } from "firebase/database";
import { useRouter } from "next/router";


const CreateUpdateViewCourier = ({ create, edit, view, courier }) => {
    const defaultValues =  view || edit ? {
        shipmentType: courier.shipmentType,
        shipmentMode: courier.shipmentMode,
        quantity: courier.quantity,
        weight: courier.weight,
        bookingMode: courier.bookingMode,
        departingTime: courier.departingTime,
        pickUpTime: courier.pickUpTime,
        pickUpDate: courier.pickUpDate,
        location: courier.location,
        status: courier.status,
        comment: courier.comment,
        senderFullname: courier.senderFullname,
        senderMobile: courier.senderMobile,
        senderEmail: courier.senderEmail,
        senderAddress: courier.senderAddress,
        recipientFullname: courier.recipientFullname,
        recipientMobile: courier.recipientMobile,
        recipientEmail: courier.recipientEmail,
        recipientAddress: courier.recipientAddress
    } : {}
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {...defaultValues}
    });
    const router = useRouter()
    const onSubmit = async (data) => {
    if(create){
        const dataToSave = push(ref(database, 'parcels'))
        const trackingCode = Math.random().toString(36).substr(2, 7)
        const parcelId = dataToSave.key;
            set(dataToSave,{
                id: parcelId,
                ...data,
                trackingCode
            }).then(() => {
                router.push(`/adminaccess/dashboard`)
                return
            }).catch((err) => {
                console.error(err)
                return
            })
        }else{
            const  { parcelId } =  router.query;
                set(ref(database, 'parcels/' + parcelId), {...data, id: courier.id, trackingCode: courier.trackingCode})
                .then(() => {
                    router.push(`/adminaccess/dashboard`)
                }).catch((err) => {
                    console.error(err   )
                })
        }
    }
    return (
        <Fragment>
            { (view || edit) && <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-end pb-3">
                        <h5>Tracking Code: {courier.trackingCode}</h5>
                    </div>
                </div>
            </div>}
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="senders-details">
                                <h4 className="card-title card-title-custom">Courier Information</h4>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Shipment Type</label>
                                        <input className="form-control" disabled={view} placeholder="Eg: Parcel" {...register('shipmentType')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Shipment Mode</label>
                                        <select className="form-control" disabled={view} {...register('shipmentMode')}>
                                            <option disabled>Shipment Mode</option>
                                            <option value="Road">Road</option>
                                            <option value="Train">Train</option>
                                            <option value="Air">Air</option>
                                            <option value="Sea">Sea</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Quantity</label>
                                        <input type="text" placeholder="2000" disabled={view} className="form-control" {...register('quantity')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Weight</label>
                                        <input type="text" placeholder="5Kg" disabled={view} className="form-control" {...register('weight')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Booking Mode</label>
                                       <select className="form-control" disabled={view} {...register('bookingMode')}>
                                        <option disabled>Select Booking Mode</option>
                                        <option value="To Be Paid">To Be Paid</option>
                                        <option value="Paid">Paid</option>
                                       </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Departing Time</label>
                                        <input type="text" placeholder="Eg: 10GMT" disabled={view} className="form-control" {...register('departingTime')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Pick-up Time</label>
                                        <input type="text" placeholder="Eg: 15GMT" disabled={view} className="form-control" {...register('pickUpTime')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Pick-up date</label>
                                        <input type="date" disabled={view} className="form-control" {...register('pickUpDate')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Location</label>
                                        <input type="text" placeholder="No 10, street New Jersey" disabled={view} className="form-control" {...register('location')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">status</label>
                                        <select className="form-control" disabled={view} {...register('status')}>
                                            <option disabled>Select Courier status</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Seized">Seized</option>
                                            <option value="Delayed">Delayed</option>
                                            <option value="Pending">Pending</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Comment</label>
                                        <input type="text" placeholder="Comment" disabled={view} className="form-control" {...register('comment')} />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="senders-details">
                                <h4 className="card-title card-title-custom">Sender&apos;s Information</h4>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Fullname</label>
                                        <input type="text" placeholder="Enter Sender's Fullname" disabled={view} required className="form-control" {...register('senderFullname')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Mobile</label>
                                        <input type="text" placeholder="Enter Sender's Mobile number Eg: +1 234" disabled={view} required className="form-control" {...register('senderMobile')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="email" placeholder="Enter Sender's Email" disabled={view} required className="form-control" {...register('senderEmail')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <input type="text" placeholder="Enter Sender's Address" disabled={view} className="form-control" {...register('senderAddress')} />
                                    </div>
                            </div>
                            <div className="recievers-details mt-3 pt-3">
                                <h4 className="card-title card-title-custom">Reciever&apos;s Information</h4>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Fullname</label>
                                        <input type="text" placeholder="Enter Recipient's Fullname" required disabled={view} className="form-control" {...register('recipientFullname')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Mobile</label>
                                        <input type="text" placeholder="Enter Recipient's Mobile Eg: +1 234" required disabled={view} className="form-control" {...register('recipientMobile')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="email" placeholder="Enter Recipient's Email" required disabled={view} className="form-control" {...register('recipientEmail')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <input type="text" placeholder="Enter Recipient's Address" required disabled={view} className="form-control" {...register('recipientAddress')} />
                                    </div>
                            </div>
                        </div>
                    </div>
                    {!view && <div className="d-flex justify-content-end pt-3 mt-3">
                        <a className="btn btn-secondary me-2">Cancel</a>
                        <button type="button"  className="btn btn-success" onClick={handleSubmit(onSubmit)}>{ create ? 'Add' : 'Update'} Courier</button>
                    </div>}
                </div>
            </div>
        </Fragment>
    )
}


export default CreateUpdateViewCourier