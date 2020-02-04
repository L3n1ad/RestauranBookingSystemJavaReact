import React from 'react';
import {Link} from 'react-router-dom';


const ShowBooking = ({booking, deleteBooking}) => {

    if (!booking) {
        return "kill me"
    }

    function deleteThisBooking(){
        const url = "http://localhost:8080/bookings/" + booking.id;
        deleteBooking(url);
    }
    
    return (
        <div>
            <h2>Id: {booking.id}</h2>
            <h3>Date: {booking.date}</h3>
            <h3>Time: {booking.time}</h3>
            <h3>Covers: Kids: {booking.kidsCovers}  Adults: {booking.adultsCovers}</h3>
            <h3>Customer: {booking.customer.firstName} {booking.customer.lastName}</h3>
            <h3>Email:{booking.customer.email} </h3>
            <h3>Contact Number: {booking.customer.phoneNumber}</h3>
            <button onClick={deleteThisBooking}>Delete</button>
            <Link to={`/bookings/${booking.id}/edit`}><button>Edit</button></Link>
        </div>
    )
}

export default ShowBooking;
