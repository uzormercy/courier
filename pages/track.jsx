import { useState } from "react"

const TrackingPage = () => {
    const [tracked, setTracked] =  useState(false)
    return (
        <div>
            <section className="tracking section-padding">
                {!tracked ?<div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6 offset-md-3 mt-3">
                                    <h3 className="section-title text-uppercase mb-0 pb-0">Track your Shipment</h3>
                                    <p className="text-muted mt-0">Enter a tracking number, and get tracking results.</p>
                                    <div className="mt-3 pt-3">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control tracking-input" placeholder="Tracking number" aria-label="Tracking number" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary track-btn" type="button" id="button-addon2">Track</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>:
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title card-title-custom">Sender&apos;s Information</h5>
                                        <span className="line bg-orange"></span>
                                    </div>

                                    <ul className="mt-3 pt-3">
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Full Name</h4>
                                            <span className="text-muted">Mr. Jadon Willms</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Mobile</h4>
                                            <span className="text-muted">(515) 342-4153</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Email</h4>
                                            <span className="text-muted">dare.elissa@example.org</span>
                                        </li>
                                        <li>
                                            <h4 className="track-list-title mb-0 pb-0">Address</h4>
                                            <span className="text-muted">4400 Adele Mountains Mooreton, NH 56122-9687</span>
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
                                            <span className="text-muted">Mr. Jadon Willms</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Mobile</h4>
                                            <span className="text-muted">(515) 342-4153</span>
                                        </li>
                                        <li className="pb-2">
                                            <h4 className="track-list-title mb-0 pb-0">Email</h4>
                                            <span className="text-muted">dare.elissa@example.org</span>
                                        </li>
                                        <li>
                                            <h4 className="track-list-title mb-0 pb-0">Address</h4>
                                            <span className="text-muted">4400 Adele Mountains Mooreton, NH 56122-9687</span>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </section>
        </div>
    )
}


export default TrackingPage