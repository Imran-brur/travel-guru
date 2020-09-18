import React from 'react';
import hotel1 from '../Image/Rectangle 26.png';
import hotel2 from '../Image/Rectangle 27.png';
import hotel3 from '../Image/Rectangle 28.png';
import star from '../Image/star_1_.png'

const Hotel = () => {
    return (
        <div>
            <div className="d-flex">
           <div className='col-md-5'>
            <img src={hotel1} alt=""/>
           </div>
           <div className='col-md-7'>
            <p>Light bright airy Stylish apt and safe peaceful stay</p>
            <p>4 guests 2 bedrooms 2 beds 2 baths</p>
            <p>Wifi air Conditioning kitchen</p>
            <p>cancelation faxibility available</p> 
            <p><img src={star} alt=""/> 4.9(20) $34/night</p>
           </div>
        </div>
        <div className="d-flex">
           <div className='col-md-5'>
            <img src={hotel2} alt=""/>
           </div>
           <div className='col-md-7'>
            <p>Apartment in Lost Panorama</p>
            <p>4 guests 2 bedrooms 2 beds 2 baths</p>
            <p>Wifi air Conditioning kitchen</p>
            <p>cancelation faxibility available</p> 
            <p><img src={star} alt=""/> 4.8(10) $52/night</p>
           </div>
        </div>
        <div className="d-flex">
           <div className='col-md-5'>
            <img src={hotel3} alt=""/>
           </div>
           <div className='col-md-7'>
            <p>AR Lounge and Pool (r&r + b&b)</p>
            <p>4 guests 2 bedrooms 2 beds 2 baths</p>
            <p>Wifi air Conditioning kitchen</p>
            <p>cancelation faxibility available</p> 
            <p><img src={star} alt=""/> 4.9(25) $44/night</p>
           </div>
        </div>
        </div>
        
    );
};

export default Hotel;