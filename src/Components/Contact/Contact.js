import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="row container mt-5">
            <div className="col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29205.55360185557!2d90.36118255000001!3d23.793901449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1633455075988!5m2!1sen!2sbd" width="500" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="col-lg-6 ps-4">
                <h3>Contact Us</h3>
                <form>
                    <div class="form-group">
                        <input type="text" class=" mt-3 form-control" placeholder="Your Name" />
                        <input type="email" class="mt-3 form-control" placeholder="Your Email" />
                        <input type="text" class="mt-3 form-control" id="exampleFormControlInput1" placeholder="Subject" />
                    </div>
                    <div class="form-group mt-3">
                        <textarea class="form-control" placeholder="Message" rows="3"></textarea>
                    </div>
                </form>
<button className="btn btn-secondary mt-3">Send Message</button>

            </div>






        </div>
    );
};

export default Contact;