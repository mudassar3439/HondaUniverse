import React from 'react'

const Vid = (props) => {
  return (
    <>
      <div className="row d-flex mt-4">
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4 embed-responsive embed-responsive-4by3">
            <video controls className="embed-responsive-item video" >
                <source src={props.video1} type="video/mp4"/>
            </video>
        </div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4 embed-responsive embed-responsive-4by3">
            <video controls className="embed-responsive-item video" >
                <source src={props.video2} type="video/mp4"/>
            </video>
        </div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4 embed-responsive embed-responsive-4by3">
            <video controls className="embed-responsive-item video" >
                <source src={props.video3} type="video/mp4"/>
            </video>
        </div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4 embed-responsive embed-responsive-4by3">
            <video controls className="embed-responsive-item video" >
                <source src={props.video4} type="video/mp4"/>
            </video>
        </div>
    </div>
    </>
  )
}

export default Vid
