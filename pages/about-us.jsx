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
                                <Image src="/images/about-right.jpg" width={500} height={500} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="about-left">
                                <h3 className="section-title py-3">About Us</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam odit vel reiciendis fuga laboriosam ut, ad maxime rerum voluptate animi ratione maiores, at quasi corrupti eos exercitationem dolores. Commodi deleniti impedit, placeat facere dolores odio praesentium iusto ad temporibus repellendus. Commodi voluptas beatae sit quo a non perferendis, minus possimus?</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam odit vel reiciendis fuga laboriosam ut, ad maxime rerum voluptate animi ratione maiores, at quasi corrupti eos exercitationem dolores. Commodi deleniti impedit, placeat facere dolores odio praesentium iusto ad temporibus repellendus. Commodi voluptas beatae sit quo a non perferendis, minus possimus?</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam odit vel reiciendis fuga laboriosam ut, ad maxime rerum voluptate animi ratione maiores, at quasi corrupti eos exercitationem dolores. Commodi deleniti impedit, placeat facere dolores odio praesentium iusto ad temporibus repellendus. Commodi voluptas beatae sit quo a non perferendis, minus possimus?</p>
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
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis illo, earum, corporis tempore nesciunt laborum fugiat accusantium animi suscipit placeat veniam voluptatem? Maiores voluptatem ipsam debitis fugiat excepturi placeat aliquam qui pariatur iure quos mollitia doloremque nisi fuga delectus veniam tenetur voluptas quidem tempora non inventore, aperiam accusamus. Voluptate, cumque.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="global_text_item">
                                <h3 className="section-title">WE ARE GROWING FAST</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis illo, earum, corporis tempore nesciunt laborum fugiat accusantium animi suscipit placeat veniam voluptatem? Maiores voluptatem ipsam debitis fugiat excepturi placeat aliquam qui pariatur iure quos mollitia doloremque nisi fuga delectus veniam tenetur voluptas quidem tempora non inventore, aperiam accusamus. Voluptate, cumque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}



export default AboutUs;