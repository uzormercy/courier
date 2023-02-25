import * as yup from 'yup';
import { useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

const TrackingPage = () => {
    const [tracked, setTracked] =  useState(false)
    const [errorMessage, setErrorMessage] =  useState(false);
    const schema =  yup.object().shape({
        trackingCode: yup.string().required('Tracking code is mandatory')
    })
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})
    const handleTracking = async (data) => {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const getParcel  =  await fetch(`${url}/api/parcels/${data.trackingCode}`);
        const parcel = await getParcel.json();
        if(parcel.status === 422){
            setErrorMessage('Unable to retrieve parcel')
        }
            setTracked(parcel);
    }
    return (
        <>
            <section className="tracking section-padding">
                {!tracked ?<div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6 offset-md-3 mt-3">
                                    <h3 className="section-title text-uppercase mb-0 pb-0">Track your Shipment</h3>
                                    <p className="text-muted mt-0">Enter a tracking number, and get tracking results.</p>
                                    <div className="mt-3 pt-3">
                                        {errors && <div className="text-danger mb-2">{errors?.trackingCode?.message || errorMessage}</div> }
                                        <div className="input-group mb-3">
                                            <input type="text" required className="form-control tracking-input" {...register('trackingCode')} placeholder="Tracking number" aria-label="Tracking number" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary track-btn" type="button" onClick={handleSubmit(handleTracking)} id="button-addon2">Track</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>:
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title card-title-custom">Sender&apos;s Information</h5>
                                        <span className="line bg-orange"></span>
                                    </div>

                                    <ul className="mt-3 pt-3">
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Full Name</h4>
                                            <span className="text-muted">{tracked.senderFullname}</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Mobile</h4>
                                            <span className="text-muted">{tracked.senderMobile}</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Email</h4>
                                            <span className="text-muted">{tracked.senderEmail}</span>
                                        </li>
                                        <li>
                                            <h4 className="track-list-title mb-0 pb-0">Address</h4>
                                            <span className="text-muted">{tracked.senderAddress}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                        <div className="card">
                                <div className="card-body">
                                    <div>
                                    <h5 className="card-title card-title-custom">Reciever&apos;s Information</h5>
                                    <span className="line bg-black"></span>
                                    </div>
                                    <ul className="mt-3 pt-3">
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Full Name</h4>
                                            <span className="text-muted">{tracked.recipientFullname}</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Mobile</h4>
                                            <span className="text-muted">{tracked.recipientMobile}</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Email</h4>
                                            <span className="text-muted">{tracked.recipientEmail}</span>
                                        </li>
                                        <li>
                                            <h4 className="track-list-title mb-0 pb-0">Address</h4>
                                            <span className="text-muted">{tracked.recipientAddress}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 pt-3">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title card-title-custom">Courier Information</h5>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <ul className="mt-3 pt-3">
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Tracking ID</h4>
                                                    <span className="text-muted">{tracked.trackingCode}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Quantity</h4>
                                                    <span className="text-muted">{tracked.quantity}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Departing Time</h4>
                                                    <span className="text-muted">{tracked.departingTime}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Status</h4>
                                                    <span className="text-muted">{tracked.status}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="mt-3 pt-3">
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Shippment Type</h4>
                                                    <span className="text-muted">{tracked.shipmentType}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Weight</h4>
                                                    <span className="text-muted">{tracked.weight}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Pick-up Time</h4>
                                                    <span className="text-muted">{tracked.pickUpTime}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Location</h4>
                                                    <span className="text-muted">{tracked.location}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="mt-3 pt-3">
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Shipment Mode</h4>
                                                    <span className="text-muted">{tracked.shipmentMode}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Book Mode</h4>
                                                    <span className="text-muted">{tracked.shipmentMode}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Pick-up Date</h4>
                                                    <span className="text-muted">{tracked.pickUpDate}</span>
                                                </li>
                                                <li className="pb-2">
                                                    <h4 className="track-list-title mb-0 pb-0">Comment</h4>
                                                    <span className="text-muted">{tracked.comment}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-3">
                                        <Link href="/">
                                            <span className='btn btn-primary'>Back Home</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </section>
        </>
    )
}


export default TrackingPage