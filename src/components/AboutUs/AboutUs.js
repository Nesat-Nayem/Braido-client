import React from 'react';
import Map from '../Map/Map';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h2>About Us</h2>
<p className='text-start'>BRAIDO is one of the country’s premier selection of luxury watch to your needs. We pride ourselves in having the finest selection of watches as well as providing top-notch customer service. BRAIDO Jewelers is about offering its customers nothing but the best. From service to selection to customer satisfaction, BRAIDO Jewelers regularly goes above and beyond to create the ultimate shopping experience for its discerning clientele.</p>
                <div className='col-md-6'>
                   <div className='mt-5 text-start'>
                   <h2>VISIT US</h2>

                   <h5 className='mt-5'>OUR 10 PLUS LOCATION IN YOUR NEARLY</h5>

                   <h6 className='mt-5'>SO WHY LET VISIT SHOW CHOOSE WHAT'S YOUR NEXT FASHION...WE JUST WAITING FOR YOU....</h6>
                   </div>
                    
                </div>

                <div className='col-md-6'>
                   
                    <Map></Map>
                   
                </div>

            </div>
        </div>
    );
};

export default AboutUs;