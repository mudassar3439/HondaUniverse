import React from "react";
import Nav from "./Nav";
import MHslider from './MHslider'
import MHSD from "./MHSD";
import Heading from './Heading'

const Home = () => {
  return (
    <>
    <Nav/>
    <div className="container-fluid ">
        <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-center">
                  <Heading h1='Wellcome To Honda Universe'/>
            </div>
        </div>
    <div className="row d-flex mt-4 ">
      {
            MHSD.map((val, ind) => {
              return(<MHslider key={ind} img1={val.img1} img2={val.img2} caption1={val.caption1} caption2={val.caption2} />)
              
            })
      }
    </div>

    <div className="row mt-5">
      <div className=" col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 " style={{backgroundColor:'black'}}>
        <div className="col-12">
          <footer className="text-white mt-2 text-center">
            <h6> & copy 2023 www.Honda-Universe.com All rights reserved!</h6>
          </footer>
        </div>
      </div>
    </div>
</div>   
    </>
  );
};

export default Home;
