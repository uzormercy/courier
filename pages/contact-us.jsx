import { Fragment } from "react"
import { FaEnvelope, FaMap, FaMapMarker, FaPhone } from "react-icons/fa"


const ContactUs = () => {
    return (
        <Fragment>
            <div className="contact_form_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h3 className="single-title">Contact Form</h3>
                            <form>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <input type="text" placeholder="Enter Your Fullname" className="form-control custom-form-input" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" placeholder="Enter E-mai" className="form-control custom-form-input" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col">
                                        <input type="text" placeholder="Subject" className="form-control custom-form-input" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col">
                                        <textarea name="" id="" placeholder="Message" cols="30" rows="10" className="form-control custom-form-textarea"></textarea>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn bg-orange text-white btn-custom-alt">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <h3 className="single-title">Contact Details</h3>
                            <div className="contact_details_inner">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="icon-circle-alt">
                                            <FaMapMarker size={20} />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p className="mb-1">B - 562, Mallin Street </p>
                                        <p>New York, NY 100 254</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <div className="icon-circle-alt">
                                            <FaEnvelope size={20} />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p className="mb-1">contact@xdevlogistics.com </p>
                                        <p>support@xdevlogistics.com</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <div className="icon-circle-alt">
                                            <FaPhone size={20} />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p className="mb-1">+123 456 7898 </p>
                                        <p>+123 456 8987</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactUs