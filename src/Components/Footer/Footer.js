import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="row bg-dark text-secondary ps-5 pe-5 pt-5 pb-4 margin">
                <div className="col-lg-3">
                    <h5 className="fw-bold text-light">Feliciano</h5>
                    <small>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</small>
                    <p style={{ color: 'white', marginTop: '10px' }}><i class="bg-secondary p-2 rounded-pill fab fa-facebook"></i> <i class="bg-secondary p-2 rounded-pill fab fa-instagram"></i>  <i class="bg-secondary p-2 rounded-pill fab fa-twitter"></i></p>
                </div>
                <div className="col-lg-3">
                    <h6 className="fw-bold text-light">Open Hours</h6>
                    <ul class="list-unstyled open-hours">
                        <li class="d-flex justify-content-between"><span>Monday</span><span>9:00 - 24:00</span></li>
                        <li class="d-flex  justify-content-between"><span>Tuesday</span><span>9:00 - 24:00</span></li>
                        <li class="d-flex  justify-content-between"><span>Wednesday</span><span>9:00 - 24:00</span></li>
                        <li class="d-flex  justify-content-between"><span>Thursday</span><span>9:00 - 24:00</span></li>
                        <li class="d-flex  justify-content-between"><span>Friday</span><span>9:00 - 02:00</span></li>
                        <li class="d-flex  justify-content-between"><span>Saturday</span><span>9:00 - 02:00</span></li>
                        <li class="d-flex  justify-content-between"><span>Sunday</span><span> 9:00 - 02:00</span></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h6 className="fw-bold text-light">Instagram</h6>
                    <p><img src="/images/f1.webp" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="/images/f2.webp" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="/images/fo6.webp" alt="" style={{ width: '90px', height: '90px' }} /> <br />

                        <img src="/images/fo3.webp" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="/images/fo4.webp" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="/images/f3.jpg" alt="" style={{ width: '90px', height: '90px' }} />
                    </p>


                </div>
                <div className="col-lg-3">
                    <h6 className="fw-bold text-light">Newsletter</h6>
                    <small>Far far away, behind the word mountains, far from the countries.</small>

                    <form action="#" class="subscribe-form">
                        <div class="form-group">
                        <input type ="text" class ="form-control mb-2 mt-4 coloring text-center" placeholder="Enter email address"style={{backgroundColor:'#2C2B2B'}}/>
                        <input type ="submit" value="Subscribe" class ="form-control submit px-3"/>
                        </div>
                    </form>

                </div>



            </div>
        </>
    );
};

export default Footer;