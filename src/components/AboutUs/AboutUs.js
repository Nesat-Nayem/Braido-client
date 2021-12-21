import React from 'react';
import Map from '../Map/Map';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                        <h1>left side</h1>
                </div>
                <div className='col-md-6'>
                <h1>right side</h1>
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;