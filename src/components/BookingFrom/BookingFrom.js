import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import './BookingForm.css';


 
const BookingForm = () => { 
   const {placeKey} = useParams();
   const placeDetails = fakeData.find(data => data.key === placeKey)
   const {name, description} = placeDetails;

    return (
        <div  className="row d-flex justify-content-center align-items-center mt-5 cart-container">
            <div className="col-sm-4">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className="col-sm-4 form-part">
                <form>
                    <p>Origin</p>
                    <input className="form-control" type="text"/>
                    <br/>
                    <p>Destination</p>
                    <input className="form-control" type="text"/>
                    <br/>
                    <p>From</p>   
                    <input className="form-control"  type="date" name="" id=""/> 
                    <p>To</p>
                    <input className="form-control"  type="date" name="" id=""/>
                </form>
                <br/>
                <button type="button" class="btn btn-warning btn-lg "><Link to="/hotel">Start Booking</Link> </button>
            </div>
        </div>
    );
};

export default BookingForm;