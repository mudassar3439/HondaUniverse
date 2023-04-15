import React from 'react'
import logo1 from './images/AboutPimg/logo1.jpg'
import logo2 from './images/AboutPimg/logo2.png'
import Honda_Universe from './images/AboutPimg/Honda-Universe.jpg'
import Nav from "./Nav";

const About = () => {
  return (
    <div>
    <Nav></Nav>
    <div className="container-fluid">
    <div className="row">
    <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-2">
      <div className="para-box d-inline-block">
        <div className="heading">Welcome To Honda Universe</div>
        <p>
          Honda Universe is not your average car dealership. Our number one goal is to exceed all your expectations while
          meeting all your automotive needs. It’s thanks to our customer commitment so many people are loyal to our
          dealership and enthusiastic about recommending us. If you are shopping for a car, we carry the full lineup of new
          Hondas, as well as a large inventory of used cars to choose from. No matter what your preference for style, size,
          performance, features, or budget is, you can count on finding just the right car for you at our location today.
        </p>
    
        <p>If you need to get an auto loan in order to complete the deal, our financing team will show you multiple options
          and walk you through every step of the process to make it as easy as possible. If your vehicle requires service or
          parts, we are also fully equipped to get your vehicle running perfectly quickly and affordably. At anytime for
          anything, Honda Universe has got you covered. Our team is here to guarantee that you have a great experience, even
          if you’re just stopping by to say hello. We truly value your business, and we will do whatever it takes to earn
          your trust. Become a part of the Honda Universe family, and you won’t regret your choice. Visit us today at 1085
          Ocean Avenue in Lakewood, just minutes from Freehold, Toms River, Manahawkin, Brick, Jackson, Manchester, Berkeley
          and Wall, NJ. Schedule a test drive today!
        </p>
        </div>
      </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-1 order-lg-1 mt-5">
          <div className="contact-mbox d-flex">
            <div className="contact-sbox">
              <div className="contact-ssbox1">
                <img src={logo1} alt='/'/>
                <span className='ms-3'><b>Phone Numbers:</b></span>
              </div>
              <div className="contact-ssbox2">
                <img src={logo2} alt='/'/>
                <span className='ms-3'><b>Sales Hours:</b></span>
                
              </div>
              <div className="contact-ssbox3">
                <img src={logo2} alt='/'/>
                <span className='ms-3'><b>Services Hours:</b></span>
                
              </div>
              <div className="contact-ssbox4">
                <img src={logo2}  alt='/'/>
                <span className='ms-3'><b>Parts Hours:</b></span>
              </div>
            </div>
          </div>
        </div>
    </div>

      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4 img">
           <div>
             <img src={Honda_Universe} className="img-fluid " alt='/'/>
           </div>
        </div>
      </div>  
  
   <div className="row justify-content-center mt-3  mb-3">
    <div className="col-12 col-md-4 col-lg-2 col-xl-2 col-xxl-2 mt-1 mb-3 mb-md-0">
      <div className="d-flex justify-content-center">
        <a className="btn btn-primary btn-1 w-100" href="#/" role="button">New inventory</a>
      </div>
    </div>
    <div className="col-8 col-md-4 col-lg-2 col-xl-2 col-xxl-2 mt-1 mb-3 mb-md-0">
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-2 w-100" type="submit">Used inventory</button>
      </div>
    </div>
    <div className="col-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 mt-1 mb-3 mb-md-0">
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-3 w-100">Contact</button>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mt-1 mb-3 mb-lg-0">
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-4 w-100">Manufacture Info</button>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mt-1">
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-5 w-100">Leakwood Guide</button>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default About
