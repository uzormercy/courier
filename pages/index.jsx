import { FaPlaneDeparture,FaTruck,FaShip } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <section className='boxed-services section-padding'>
        <div className='container'>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card border-orange boxed-services-card">
                        <div className="card-body d-flex justify-content-start align-items-center">
                          <div className='icon-circle'>
                            <FaPlaneDeparture size={20} className='' />
                          </div>
                          <h4 className='boxed-services-card-title pt-2'>Air Cargo</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-orange boxed-services-card">
                      <div className="card-body d-flex justify-content-start align-items-center">
                          <div className='icon-circle'>
                            <FaTruck size={20} className='' />
                          </div>
                          <h4 className='boxed-services-card-title pt-2'>Road Transport</h4>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-4">
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
      <section className='about section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className=''>
                  <h1 className='section-title text-center'>EXPLORE OUR FREIGHT SERVICE</h1>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Culpa laboriosam enim eius, nesciunt magnam natus labore illo quam laboriosam enim eius, 
                    recusandae, officia impedit quos quibusdam ex sit laboriosam enim eius,. Inventore nesciunt eos iusto accusamus!
                  </p>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Culpa nesciunt magnam natus laboriosam enim eius, illo quam laboriosam enim eius, 
                    recusandae, officia impedit quos quibusdam ex sit. Inventore nesciunt eos iusto accusamus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dicta at ipsa. Eaque, ea. 
                    Rerum amet sed voluptas ad et incidunt at perferendis. Doloribus, ipsam? Repellat quam temporibus repudiandae tempore.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
