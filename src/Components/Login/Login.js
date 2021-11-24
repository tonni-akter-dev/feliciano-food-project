import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { googleSignin } = useAuth();
    return (
        <>
        <div className="row mt-5 mx-auto container">
            <div className="col-lg-6 col-sm-12">
{/* checkbox submit button */}
<div>
<button  className=" mt-5  btn btn-outline-dark"  onClick={googleSignin}><i class="fab fa-google"></i> sign in with facebook</button>
        <button  className="mt-5 ms-3 btn btn-outline-dark"  onClick={googleSignin}><i class="fab fa-facebook"></i> sign in with facebook</button>
</div>
<p className="mt-2">Or sign in using email address.......</p>
                <h2 className="fw-bolder text-center">LOGIN</h2>
                <form>
                    <div>
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Your email address" />
                    </div>
                    <div >
                        <label for="exampleFormControlInput1" className="mt-4 form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Your Password" />
                    </div>
                    <div className="col-12 m-2">
                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button style={{width:'500px'}} type="submit" className="btn btn-primary">Sign in</button>
                    </div>
     {/* <div className="mt-3">
     <button  className="ms-3 btn btn-outline-dark"  onClick={googleSignin}><i class="fab fa-facebook"></i> sign in with facebook</button>
     <button  className="ms-3 btn btn-outline-dark"><i class="fab fa-facebook"></i> sign in with facebook</button>
     
     </div> */}
     <p className="p-5">Dont have an account ?? <Link to='/register'>Register</Link></p>
                </form>
            </div>
            <div className="col-lg-6 col-sm-12">
                <img src="/images/fo5.webp" className="img-fluid mt-5 pt-5" alt=""/>
            </div>
        </div>
        </>
    );
};
export default Login;