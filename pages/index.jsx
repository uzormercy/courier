import Link from "next/link";
import { FaClock, FaCalendarAlt, FaNewspaper, FaGlobe } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <section className='boxed-services section-padding'>
        <div className='container'>
            <div className="row">
              <div className="feature-block col-md-4 mb-2">
                <div className="inner-box">
                  <div className="icon-box">
                 <FaCalendarAlt size={60} className='icon' />
                    <span className="count">1</span>
                  </div>
                  <div className="content-block">
                    <h4 className="title">Cost Optimization</h4>
                    <div className="text">
                      We&apos;ve got you covered in all areas and classes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-block col-md-4 mb-2">
                <div className="inner-box">
                  <div className="icon-box">
                 <FaClock size={60} className='icon' />
                    <span className="count">1</span>
                  </div>
                  <div className="content-block">
                    <h4 className="title">Reduced transit timing</h4>
                    <div className="text">
                      We deliver on schedule.
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-block col-md-4 mb-2">
                <div className="inner-box">
                  <div className="icon-box">
                 <FaNewspaper size={60} className='icon' />
                    <span className="count">1</span>
                  </div>
                  <div className="content-block">
                    <h4 className="title">Warehouse operation</h4>
                    <div className="text">
                      We offer great deals in our warehouse operations, for various size of shipments
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="about-section pt-0">
        <div className="anim-icons"></div>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">Transportation Company</span>
                    <h2>We provide full rang of transportation services</h2>
                    <div className="text">Our company reaches every corner of the continent via a sophisticated logistics network. With an innovative infrastructure strategy, we now handle shipments of any size to any part of the world.</div>
                  </div>
                  <div className="content-box">
                    <div className="about-block">
                      <i className="icon flaticon-worldwide-shipping"></i>
                      <h4 className="title">Worldwide services</h4>
                      <p className="text">We always provide our customers with a complete solution focused on meeting their transportation needs.</p>
                    </div>

                    <div className="about-block">
                      <i className="icon flaticon-3d-cube"></i>
                      <h4 className="title">Local services</h4>
                      <p className="text">We can assure our customers of secure supply chains.</p>
                    </div>
								  </div>
                  <div className="btm-box">
                    <Link href="/about-us" >
                      <span className="theme-btn btn-custom-style-one"><span className="btn-title">Explore More</span></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                    <figure className="image-1"><img src="images/resource/about-1.jpg" alt="about-us-1" /></figure>
                    <figure className="image-2"><img src="images/resource/about-2.jpg" alt="about-us-2" /></figure>
                    <div className="experience">
                      <strong><FaGlobe size={60} className="icon flaticon-global" /> 40<br/>
                        Years</strong>
                      Working Exprience
                    </div>
                  </div>
						    </div>
              </div>
            </div>
      </section>
    </>
  )
}
