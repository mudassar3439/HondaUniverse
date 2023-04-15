import React from 'react'
import Img from './Img'
import ImgData from './ImgData'
import Nav from './Nav'
const Images = () => {
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
            ImgData.map((val, ind) => {
              return(<Img key={ind} img1={val.img1} img2={val.img2} img3={val.img3} img4={val.img4} img5={val.img5} img6={val.img6} />)
              
            })
}
      
      <div className="row mt-5">
        <div className=" col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 " style={{backgroundColor: "black"}}>
          <div className="col-12">
            <footer className="text-white mt-2 text-center">
              <h6>&copy; 2023 www.Honda-BRV.com All rights reserved!</h6>
            </footer>
          </div>
        </div>
      </div>
</div>
    </div>
  )
}

export default Images
