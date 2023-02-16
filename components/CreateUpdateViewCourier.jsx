import { Fragment } from "react"
import { useForm } from "react-hook-form";

const CreateUpdateViewCourier = ({ create, edit, view, courier }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {

        }
    });
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="senders-details">
                                <h4 className="card-title card-title-custom">Courier Information</h4>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Shipment Type</label>
                                        <input className="form-control" placeholder="Eg: Parcel" {...register('shipmentType')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Shipment Mode</label>
                                        <select className="form-control" {...register('shipmentMode')}>
                                            <option value=""></option>
                                            <option value="Road">Road</option>
                                            <option value="Train">Train</option>
                                            <option value="Air">Air</option>
                                            <option value="Sea">Sea</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Quantity</label>
                                        <input type="text" className="form-control" {...register('quantity')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Weight</label>
                                        <input type="text" className="form-control" {...register('weight')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Booking Mode</label>
                                       <select className="form-control" {...register('bookingMode')}>
                                        <option value=""></option>
                                        <option value="To Be Paid">To Be Paid</option>
                                        <option value="Paid">Paid</option>
                                       </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Departing Time</label>
                                        <input type="text" className="form-control" {...register('departingTime')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Pick-up Time</label>
                                        <input type="text" className="form-control" {...register('pickUpTime')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Pick-up date</label>
                                        <input type="text" className="form-control" {...register('pickUpDate')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Location</label>
                                        <input type="text" className="form-control" {...register('location')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">status</label>
                                        <select className="form-control" {...register('status')}>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Seized">Seized</option>
                                            <option value="Delayed">Delayed</option>
                                            <option value="Pending">Pending</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Comment</label>
                                        <input type="text" className="form-control" {...register('comment')} />
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
                                        <input type="text" required className="form-control" {...register('senderFullname')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Mobile</label>
                                        <input type="text" required className="form-control" {...register('senderMobile')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" required className="form-control" {...register('senderEmail')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <input type="text" className="form-control" {...register('senderAddress')} />
                                    </div>
                            </div>
                            <div className="recievers-details mt-3 pt-3">
                                <h4 className="card-title card-title-custom">Reciever&apos;s Information</h4>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Fullname</label>
                                        <input type="text" required className="form-control" {...register('receiverFullname')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Mobile</label>
                                        <input type="text" required className="form-control" {...register('recieverMobile')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="email" required className="form-control" {...register('recieverEmail')} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <input type="text" required className="form-control" {...register('recieverAddress')} />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end pt-3 mt-3">
                        <a className="btn btn-secondary me-2">Cancel</a>
                        <button type="button"  className="btn btn-success">Add Courier</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default CreateUpdateViewCourier