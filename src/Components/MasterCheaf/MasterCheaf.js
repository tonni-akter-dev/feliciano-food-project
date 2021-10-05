import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './MasterCheaf.css';
const MasterCheaf = () => {
    return (
        <div>
            <div className=" text-center">
            <span className="title" style={{ position: 'relative', top: '80px', fontSize: '120px' }}>Cheaf</span>
                <h1 className="fw-bolder">Our Master Chef</h1>
            </div>
               <Row className="ms-5 me-5">
                <Col>
                    <img src="/images/cheaf1.webp" className="img-fluid" alt="" />
                    <h6>John Smooth</h6>
                    <small>Restaurant Owner</small>
                    <p style={{color:'#c8a97e'}}><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i> <i class="fab fa-google-plus-g"></i> <i class="fab fa-twitter"></i></p>
                </Col>
                <Col>
                    <img src="/images/cheaf2.webp" className="img-fluid" alt="" />
                    <h6>Rebeca Welson</h6>
                    <small>Head Chef</small>
                      <p style={{color:'#c8a97e'}}><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i> <i class="fab fa-google-plus-g"></i> <i class="fab fa-twitter"></i></p>
                </Col>
                <Col>
                    <img src="/images/cheaf3.webp" className="img-fluid" alt="" />
                    <h6>Kharl Brany</h6>
                    <small>Chef</small>
                      <p style={{color:'#c8a97e'}}><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i> <i class="fab fa-google-plus-g"></i> <i class="fab fa-twitter"></i></p>
                </Col>
                <Col>
                    <img src="/images/cheaf4.webp" className="img-fluid" alt="" />
                    <h6>Luke Simon</h6>
                    <small>Chef</small>
                      <p style={{color:'#c8a97e'}}><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i> <i class="fab fa-google-plus-g"></i> <i class="fab fa-twitter"></i></p>
                </Col>
            </Row>



        </div>
    );
};

export default MasterCheaf;