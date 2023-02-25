import Image from "next/image";
import Link from "next/link";
import { FaPlaneDeparture,FaTruck,FaShip } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <section className='boxed-services section-padding'>
        <div className='container'>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                  <div className="row">
                    <div className="col-md-4 mb-2">
                      <div className="card border-orange boxed-services-card">
                        <div className="card-body d-flex justify-content-start align-items-center">
                          <div className='icon-circle'>
                            <FaPlaneDeparture size={20} className='' />
                          </div>
                          <h4 className='boxed-services-card-title pt-2'>Air Cargo</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                    <div className="card border-orange boxed-services-card">
                      <div className="card-body d-flex justify-content-start align-items-center">
                          <div className='icon-circle'>
                            <FaTruck size={20} className='' />
                          </div>
                          <h4 className='boxed-services-card-title pt-2'>Road Transport</h4>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                    <div className="card border-orange boxed-services-card">
                        <div className="card-body d-flex justify-content-start align-items-center">
                          <div className='icon-circle'>
                            <FaShip size={20} className='' />
                          </div>
                          <h4 className='boxed-services-card-title pt-2'>Sea Freight</h4>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <section className="featured-about-section">
          <div className="left-featured-content">
            <div className="left-featured-inner-content">
              <h4 className="section-title">ABOUT US</h4>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias modi impedit molestiae dignissimos magnam rem consequatur. 
                Culpa officiis, enim nulla aspernatur vitae praesentium? Minima possimus delectus repellat est, ipsum vitae veniam, voluptatem 
                aliquam voluptas debitis ducimus beatae iste tempore molestias.
                </p>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias modi impedit molestiae dignissimos magnam rem consequatur. 
                Culpa officiis, enim nulla aspernatur vitae praesentium? Minima possimus delectus repellat est, ipsum vitae veniam, voluptatem 
                aliquam voluptas debitis ducimus beatae iste tempore molestias.
                </p>
                <Link href="/about-us">
                  <span className="btn btn-custom bg-orange">Know More</span>
                </Link>
            </div>
            
          </div>
          <div className="right-featured-content">
            <Image src="/images/feature-right.jpg" alt="about-us" width={589} height={511} />
          </div>
      </section>
  

    </>
  )
}
