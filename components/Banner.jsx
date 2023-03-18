import Link from "next/link"

const Banner =  ({ isFull, pageTitle }) => {
return(
    <>
        {isFull ? <div className="full-banner">
            <div className="banner-container container">
                <div className="row align-items-md-end">
                    <div className="col-lg-6 align-self-center flex-column  banner-left-content">
                        <h4 className="medium-title">Reliable and Flexible Logistics</h4>
                        <h1 className="big-title">Logistics & Cargo  For Business</h1>
                        <div className="py-3 my-3">
                            <Link href="/about-us">
                                <span className="btn btn-custom-style-one btn-light-hover">Explore more </span>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="col-lg-7"></div> */}
                </div>
            </div> 
        </div> : 
            <div className="inner-banner">
            <div className="banner-container container">
                <div className="row align-items-md-end">
                    <div className="col-lg-12 align-self-center flex-column  banner-left-content">
                        <h4 className="innerpage-banner-title font-bold ps-3">{pageTitle}</h4>
                    </div>
                    {/* <div className="col-lg-7"></div> */}
                </div>
            </div> 
        </div>
        }
    </>
       
    )
}


export default Banner