import React from 'react';
import './Booking.css';
const Booking = () => {
    return (
        <div className="booking-bg">
            <div className="row container p-5 mt-5">
                <div className="col-lg-7 col-sm-12 bg-light">
                    <div className=" text-center">
                        <span className="title" style={{ position: 'relative', top: '60px', fontSize:'90px'}}>Booking a table</span>
                        <h1 className="fw-bolder text-dark">Make Reservation</h1>
                    </div>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputPassword4"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="inputAddress"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Date</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Time</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Person</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="col-12 text-center pb-5">
                            <button type="submit" class="btn " style={{backgroundColor:'#c7a97e'}}>Make Reservation</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;