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
                                        <Image src="/images/services_thumb1.jpg" alt='services' width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">Transportation</h3>
                                        <p>We offer a wide range of transportation services, including air, sea, and land transport. Our transportation solutions are customized to meet the specific needs of each client, ensuring that their goods are delivered safely and on time</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="image_list">
                                        <Image src="/images/services_thumb2.jpg" alt='services' width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">Warehousing and Distrubution</h3>
                                        <p>We provide flexible warehousing and distribution solutions to help our clients streamline their supply chain. Our warehouses are equipped with state-of-the-art technology and security systems to ensure the safety and security of our clients goods.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="image_list">
                                        <Image src="/images/services_thumb3.jpg" alt='services' width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">Customer Brokerage</h3>
                                        <p>We offer customs brokerage services to help our clients navigate the complex customs clearance process. Our team of experienced customs brokers ensures that all necessary documentation is in order and that our clients goods are cleared through customs without delay.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="image_list">
                                        <Image src="/images/services_thumb4.jpg" alt='services' width={400} height={300} />
                                        <h3 className="single-title pb-1 mt-2 pt-2 font-25">Supply Chain Management</h3>
                                        <p>We offer supply chain management services to help our clients optimize their supply chain and improve their bottom line. Our supply chain management solutions are tailored to meet the specific needs of each client, ensuring that they can effectively manage their inventory and meet customer demand.</p>
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