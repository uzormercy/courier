import Image from "next/image";
import { Fragment } from "react";

const AboutUs = () => {
    return (
        <Fragment>
            <section className="section-padding our_about_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-image">
                                <Image src="/images/about-right.jpg" alt="about-us" width={500} height={500} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="about-left">
                                <h3 className="section-title py-3">About Us</h3>
                                <p>Welcome to our xdevlogistics! We are a team of dedicated professionals committed to providing the best logistics solutions for our clients. Xdevlogistics was founded with the goal of streamlining the supply chain process and making it more efficient for businesses of all sizes.</p>
                                <p>At xdevlogistics, we pride ourselves on our ability to handle even the most complex logistics challenges with ease. Our team consists of highly skilled professionals who are experts in their respective fields. We have a deep understanding of the logistics industry, and we use this knowledge to develop customized solutions that meet the unique needs of each of our clients.</p>
                                <p>We offer a wide range of services, including transportation, warehousing, distribution, and inventory management. We also provide specialized services such as temperature-controlled transportation and hazardous materials handling. Whatever your logistics needs may be, we have the expertise and resources to get the job done right.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding global_text_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="global_text_item">
                                <h3 className="section-title">OUR GLOBAL MISSION</h3>
                                <p>Our mission is to provide our clients with exceptional service and support, and to exceed their expectations at every turn. We believe that our success is directly tied to the success of our clients, and we are committed to helping them achieve their goals.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="global_text_item">
                                <h3 className="section-title">WE ARE GROWING FAST</h3>
                                <p>Our ultimate goal is to create value for our clients, our employees, and our stakeholders, while making a positive impact on the communities we serve and the environment we operate in. We believe that by pursuing this vision with passion, integrity, and a relentless focus on excellence, we can achieve our goal of becoming the leading logistics provider in the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}



export default AboutUs;