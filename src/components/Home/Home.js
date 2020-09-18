import React from 'react';
import image1 from '../Image/Sajek.png';
import image2 from '../Image/Sreemongol.png';
import image3 from '../Image/sundorbon.png'
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData'

const Home = () => {  
    return (
      <div >
            <div className="d-flex justify-content-around ">   
            <div class="card" style={{width:"18rem"}}>
                <img src={image1} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">COX'SBAZAR</h5>
                    <button class="btn btn-warning"> <Link to={`/bookingForm/${fakeData.[0].key}`}>BOOKING ➜</Link></button>
                </div>
                </div>
            <div class="card" style={{width:"18rem"}}>
                <img src={image2} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">SREEMONGLE</h5>
                    <button class="btn btn-warning"> <Link to={`/bookingForm/${fakeData.[1].key}`}>BOOKING ➜</Link></button>
                </div>
                </div>
            <div class="card" style={{width:"18rem"}}>
                <img src={image3} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">SUNDORBON</h5>
                    <button class="btn btn-warning"> <Link to={`/bookingForm/${fakeData.[2].key}`}>BOOKING ➜</Link></button>
                </div>
                </div>         
           </div>
      </div>
    );
};

export default Home;