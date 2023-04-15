import React from 'react'
import logo from './images/AboutPimg/logo 3.png'
import Nav from "./Nav";
import Heading from './Heading'
const Login = () => {
  return (
    <>
    <Nav></Nav>
    <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
        <div className="log text-center">
          <form> 

            <img src={logo} className="img-fluid" alt='/'/>

            <Heading h2="Log-in Here"/>

            <div className=" text-left text-white">
              <label for="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder="Enter your E-mail" className="form-control"/>
            </div>

            <div class="form-group text-left text-white">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter your Password" className="form-control"/>
            </div>

            <div className="form-group text-left mt-0">
              <a href="#/" className="text-left">Forget Password</a>
            </div>

            <button className="btn btn-primary btn-block">Log-In</button>

          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Login
