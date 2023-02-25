import Image from "next/image";
import { Fragment } from "react";



const ServicesPage = () => {
    return (
        <Fragment>
            <div className="services_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 col-xs-6">
                                    <div className="image_list">
                                        <Image src="/images/services_thumb1.jpg" width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">Ground Shipping</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequatur delectus omnis commodi dignissimos modi, culpa adipisci id praesentium qui quidem amet nihil? Ad incidunt repellat aliquam, error optio explicabo!</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="image_list">
                                        <Image src="/images/services_thumb2.jpg" width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">Large Projects</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequatur delectus omnis commodi dignissimos modi, culpa adipisci id praesentium qui quidem amet nihil? Ad incidunt repellat aliquam, error optio explicabo!</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="image_list">
                                        <Image src="/images/services_thumb3.jpg" width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">International Air Freight</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequatur delectus omnis commodi dignissimos modi, culpa adipisci id praesentium qui quidem amet nihil? Ad incidunt repellat aliquam, error optio explicabo!</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="image_list">
                                        <Image src="/images/services_thumb4.jpg" width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">Contract Logistics</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequatur delectus omnis commodi dignissimos modi, culpa adipisci id praesentium qui quidem amet nihil? Ad incidunt repellat aliquam, error optio explicabo!</p>
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


export default ServicesPage;