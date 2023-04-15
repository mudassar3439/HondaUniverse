import React from 'react'
import Nav from './Nav'
import SHSD from './SHSD';
import SHslider from './SHslider';
import Heading from '../../Heading'

const Ap = () => {
  return (
    <>
    <Nav></Nav>
   
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <Heading h1='Honda BR-V'></Heading>
          </div>
      </div>
        <div className="row d-flex">
        {
            SHSD.map((val, ind) => {
              return(<SHslider key={ind} img1={val.img1} img2={val.img2} />)
              
            })
      }

    </div>
    <div className="row mt-2 mb-1">
      <div className=" col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 " style={{ backgroundColor: "black"}}>
        <div className="col-12">
          <footer className="text-white mt-2 text-center">
            <h6>&copy; 2023 www.Honda-BRV.com All rights reserved!</h6>
          </footer>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Ap
