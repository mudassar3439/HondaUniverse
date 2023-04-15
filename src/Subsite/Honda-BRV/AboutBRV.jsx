import React from 'react'
import img1 from '../../images/BRV/Aboutimg/Exterior.jpg'
import img2 from '../../images/BRV/Aboutimg/Interior.jpg'
import img3 from '../../images/BRV/Aboutimg/Engin.png'
import Nav from './Nav'

const AboutBRV = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container-fluid mt-3 border" style={{backgroundColor: 'antiquewhite'}}>
        <div className="row">
            <div className="col-12" >
                <marquee behaviour="scroll" scrollamount="5">Hi I Am Mudassar Mobeen and i am the devolper of this site that are you
                    use for getting Information about your favirout Honda Cars
                </marquee>
            </div>
        </div>
    </div>

 <div className="container mt-1 mb-2 rounded">
    <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 " style={{fontSize:'17px'}}>
<h1 className='text-center'> Honda BR-V</h1>
<p>Honda BR-V is a subcompact crossover SUV manufactured by the Japanese automobile manufacturer Honda. In Pakistan, Honda BR-V was launched in 2017 as an affordable 7-seater SUV. Initially, Honda launched 3 trims of the BR-V namely: Honda BR-V i-VTEC, i-VTEC MT, and i-VTEC S.</p> 
<p>In 2019, the BR-V received a facelift with an improved exterior and more interior features. The facelifted version is the only trim currently available in Pakistan.</p>

<h3>BR-V Exterior</h3>
<br/>The Honda BR-V 2022 comes with a bold and sleek design language. The front has a new bumper with a modern grille which is accompanied by autoprojector headlamps with daytime running lights (DRLs). Below the headlamps are stylish fog lights.
Both the sides of the Honda BR-V 2022 are equipped with power-retractable side mirrors and sun visors.<br/>
<img src={img1} alt='/' title=" Exterior of Honda BRV" style={{width:400}} className='img-fluid mt-4 mb-4'/><br/>
The rear of the car has a chrome garnish adorned with LED taillights on its ends. A purposeful spoiler with a rear wiper is also present at the rear end of the car. The top of Honda BR-V 2022 has a shark fin antenna.<br/>
<h3>Honda BRV Interior</h3>
The interior of Honda BRV 2022 is luxurious with 7 seats wrapped in premium fabric. The electrically powered steering wheel is tilt-adjustable and has audio control switches. Behind the steering wheel is a meter cluster with a multi-information LCD display that shows driver information and has an Eco indicator.<br/> 

Honda BR-V 2022 supports smart entry with push-start button. The driver’s seat height is adjustable while the seats in the 2nd row have reclining, sliding, tilting adjustments and are fully foldable. The 3rd row also comes with features of folding 50/50, fully folding, and one-touch tumble increasing boot space.<br/>
 <img src={img2} alt='/' title=" Interior of Honda BRV" style={{width:400}} className='img-fluid mt-4 mb-4'/>

<br/>

The center fascia houses a 7-inch display screen that supports a navigation system, smartphone connectivity, hands-free telephone technology Bluetooth connectivity, etc. The car also has an HDMI port and USB input. Digital air conditioning with rear AC vents keeps the whole car cool. The car comes with a 12V power outlet and has 10 cupholders. Other common features include seatback pockets and a vanity mirror.<br/> 

 The car’s safety features include two airbags for the driver and the front-seat passenger, seatbelts for all the passengers, anti-lock braking system (ABS), electronic brake distribution (EBD), security alarm with immobilizer, and a rearview camera.<br/> 

 <h3>BRV Engine</h3>

Honda BRV 2022 comes with a 1497 cc 4-cylinder, 16 valve, SOHC i-VTech engine which generates a maximum power of 88/6600 kW/rpm at a maximum torque of 145/4600 Nm/rpm. The car comes with CVT transmission.<br/>
<img src={img3} alt='/' title=" Engine of Honda BRV" style={{width:400}} className='img-fluid mt-4 mb-4'/>

<h3>BR-V Mileage</h3>
With a fuel capacity of 42 liters, the Honda BR-V 2022 provides a fuel economy of 11 km/l in the city and 15 km/l on the highway.<br/> 

<h3>BRV Ride & Handling</h3>
The Honda BRV 2022 has a comfortable ride and impressive handling. The suspension is a bit stiff which can be felt while driving but the overall ride is quite comfortable. The car is easy-to-drive and maneuvering is also effortless keeping in view the 7-seater dimensions of the vehicle. The ride quality of Honda BR-V 2022 is above average.<br/>

<h3>Honda BRV Maintenance</h3>
Honda BR-V 2022 is easy to maintain as its auto parts are very easily available in the market and are quite affordable. 
<br/>
<h3>BRV Competitors</h3>
Honda BRV 2022 competes with Kia Stonic, Glory 580 Pro, and Toyota Rush in the Pakistani market.
<br/>
Due to its affordable price, Honda BR-V competes with Kia Stonic despite having more seating capacity than the latter. Stonic lies in the same price range as that of the BR-V and has similar features. Kia Stonic has a larger fuel capacity and a better fuel economy but its engine is lesser in power and displacement than that of the BR-V.<br/>
Glory 580 Pro by DFSK is a fitting competitor for the BRV due to the same size and features. Glory 580 Pro has a larger fuel tank, a more powerful engine, traction control, remote boot id, sunroof, and power seats. BR-V beats Glory 580 Pro when it comes to price as BRI-V is a lot more affordable.<br/>
Toyota Rush is also a competitor of the Honda BR-V but it has a lot fewer features than the BR-V.<br/>
</div>
</div>
    
</>)
};

export default AboutBRV;
