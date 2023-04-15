import React from 'react'

const MHslider = (props) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 g-4">

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner box">
    <div className="carousel-item active">
          <img src={props.img1} className="img-fluid MHSimg" alt="..."/>
          <div className="carousel-caption ">
            <h2 className='text-warning'>{props.caption1}</h2>
          </div>
     </div>
     <div className="carousel-item">
          <img src={props.img2}  className="img-fluid MHSimg" alt="..."/>
          <div className="carousel-caption ">
            <h2 className='text-danger'>{props.caption2}</h2>
          </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default MHslider
