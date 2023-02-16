const Footer = () => {
    return(
        <>
        <section className="footer">
            <div className="footer-widget-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-6">
                            <div className="footer-about-us">
                                <p>
                                Courier Logistics is the world <br/>largest courier service provider.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <div className="footer-title">
                                <h3>Services</h3>
                            </div>
                            <div className="footer-services">
                                <ul>
                                    <li><a href="">Standard Air Freight Services</a></li>
                                    <li><a href="">Sea Freight Services</a></li>
                                    <li><a href="">Full loads and part loads</a></li>
                                    <li><a href="">Specialized Transport</a></li>
                                    <li><a href="">Logistics Solutions</a></li>
                                    <li><a href="">Tailored Project Transport</a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <div className="footer-title">
                                <h3>Contact</h3>
                            </div>
                           <div className="footer-contact-details">
                            <p className="text-whitesmoke">21 E. Valley Stream Blvd.<br/>
                                    Valley Stream, NY 11580, USA
                                </p>
                                <p className="text-whitesmoke">Phone: 
                                    <a href="tel: +1-(255)-7899" className="footer-link ms-2">+1 (255) 7899</a>
                                </p>
                                <p className="text-whitesmoke">Email: 
                                    <a href="mailto:contact@courier.com" className="footer-link ms-2">contact@courier.com</a>
                                </p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy-right">
                <div className="container">
                    <h4>Copyright &copy; 2008 - 2023 Courier All rights reserved.</h4>
                </div>
            </div>
        </section>
        </>
    )
}


export default Footer