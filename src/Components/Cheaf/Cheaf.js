import React from 'react';
import CountUp from 'react-countup';
import './Cheaf.css';
const Cheaf = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-7 d-flex mt-5">
                    <div className="img img-1 mr-md-2 d-lg-block d-none">
                        <h2 className="head">sddddddddddd</h2>
                    </div>

                    <div className="img mt-4 img-2 d-lg-block d-none" >
                        <h3 className="head">skdjnbjsmmmmml</h3>
                    </div>
                </div>
                <div className="col-md-5 pt-5 pt-md-5 pb-md-3">
                    <div className="mb-4 my-5 my-md-0">
                        <span className="title" style={{ position: 'relative', top: '80px', zIndex: '-1', fontSize: '120px' }}>About</span>
                        <h1 className="mb-4 fw-bolder">Feliciano  <br /> Restaurant</h1>
                    </div>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <pc className="time">
                        <span>Mon - Fri <strong>8 AM - 11 PM</strong></span> <br />
                        <span className="number">+ 1-978-123-4567</span>
                        <p></p>
                    </pc></div>
            </div>
            {/* counter */}
            <div className="d-flex container">
                <div className="mar text-center">
                    <CountUp className="hello" duration={5} end={18} />
                    <br />
                    <small style={{ fontSize: '15px' }}>
                        YEARS OF EXPERIENCED</small>
                </div>
                <div className="mar text-center">
                    <CountUp className="hello" duration={5} end={100} />
                    <br />
                    <small style={{ fontSize: '15px' }}>MENUS/DISH</small>
                </div>
                <div className="mar text-center">
                    <CountUp className="hello" duration={5} end={50} /> <br />
                    <small style={{
                        fontSize: '15px',
                    }}>STAFFS</small>
                </div>
                <div className="mar text-center">
                    <CountUp className="hello" duration={5} end={15000} /> <br />
                    <small style={{ fontSize: '15px' }}>HAPPY CUSTOMERS</small>
                </div>
                <div>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
            {/* services */}
            <div className="bg-light text-center pb-5">
                <span className="title" style={{ position: 'relative', top: '80px', fontSize: '120px' }}>Services</span>
                <h1 className="fw-bolder">Catering Services</h1>
                <div className="row">
                    <div className="col-lg-4">
                    <img src="/images/c.png" className="width"   alt="" />
                        <h6>Birthday Party</h6>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="/images/m.png" className="width" alt="" />
                        <h6>Business Meetings
</h6>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div className="col-lg-4">
                       
                        <img src="/images/t.jpg" className="w-25"  alt="" />
                        <h6>Wedding Party</h6>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Cheaf;