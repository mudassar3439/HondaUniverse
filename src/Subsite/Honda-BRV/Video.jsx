import React from 'react'
import Nav from './Nav'
import Vid from './Vid';
import VideoData from './VideoData';
const Video = () => {
  return (
    <div>
    <Nav></Nav>
    <div className="container-fluid mt-3 border" style={{backgroundColor: "antiquewhite"}}>
    <div className="row">
        <div className="col-12" >
            <marquee behaviour="scroll" scrollamount="5">Hi I Am Mudassar Mobeen and i am the devolper of this site that are you
                use for getting Information about your favirout Honda Cars
            </marquee>
        </div>
    </div>
</div>
<div className="container-fluid">
                                
{
            VideoData.map((val, ind) => {
              return(<Vid key={ind} video1={val.video1} video2={val.video2} video3={val.video3} video4={val.video4} />)
              
            })
}                   
                                

    <div className="row mt-5">
        <div className=" col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 " style={{backgroundColor: "black"}}>
          <div className="col-12">
            <footer className="text-white mt-1 text-center">
              <h6> & copy 2023 www.Honda-BRV.com All rights reserved!</h6>
            </footer>
          </div>
        </div>
      </div>                                                     
        
</div>
    </div>
  )
}

export default Video
