
const Banner =  ({isFull, pageTitle}) => {
return(
    <>
        {isFull ? <div className="full-banner">
            <div className="banner-container container">
                <div className="row align-items-md-end">
                    <div className="col-lg-6 align-self-center flex-column  banner-left-content">
                        <h4 className="medium-title">Reliable and Flexible Logistics</h4>
                        <h1 className="big-title">Personalized Cargo Services In Worldwide Commerce</h1>
                        <p className="text-white text-sm-start text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet fugiat ipsum libero, nam iure iste eligendi ipsam suscipit distinctio doloremque numquam quam eos laudantium cupiditate obcaecati quis dignissimos, mollitia non.</p>
                        <div className="py-3 my-3">
                            <a className="btn btn-custom">Know more </a>
                        </div>
                    </div>
                    {/* <div className="col-lg-7"></div> */}
                </div>
            </div> 
        </div>: 
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