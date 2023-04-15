import React from 'react'

const SHslider = (props) => {
  return (
    <>
       <div className="col-12 col-md-6 col-lg-4 col-xl-4 ">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner box">
                      <div className="carousel-item active">
                        <img src={props.img1} className="img-fluid SHSimg" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={props.img2} className="img-fluid SHSimg" alt="..."/>
                      </div>
                    </div>
                  </div>
            </div>
    </>
  )
}

export default SHslider
