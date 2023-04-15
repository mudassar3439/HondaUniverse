import React from 'react'

const Img = (props) => {
  return (
    <>
      <div className="row mt-4">
            <div className=" col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
              <img src={props.img1} className="img-fluid img-thumbnail " alt='/'/>
            </div>
            <div className="  col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                <img src={props.img2} className="img-fluid img-thumbnail" alt='/'/>
              </div>
              <div className="  col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                <img src={props.img3} className="img-fluid img-thumbnail" alt='/'/>
              </div>
              <div className="  col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                <img src={props.img4} className="img-fluid img-thumbnail" alt='/'/>
              </div>
              <div className="  col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                <img src={props.img5} className="img-fluid img-thumbnail" alt='/'/>
              </div>
              <div className="  col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                <img src={props.img6} className="img-fluid img-thumbnail" alt="/" />
              </div>
        </div>
    </>
  )
}

export default Img
