import React from 'react'
import { Link } from "react-router-dom";
import Logo from './images/logo.png';

export const Register = () => {
    return (
        <>
            <div className='registerPage'>
                <div className="row mx-auto h-100">
                    <div className="col-md-6">
                        <div className="regsterForm formWrapper">
                            <div className="w-100">
                                <div className="formLogo mx-auto">
                                    <img className='img-fluid' src={Logo} alt="Logo" />
                                </div>
                                <h1>Signup & Get Started</h1>
                                <span className='d-block text-center text-secondary'>Open your account in seconds</span>
                                <form action="" className='main_forms'>
                                    <div className="form-group">
                                        <label className="control-label">Full Name <sup className="text-danger">*</sup></label>
                                        <input type="text" name="" id="" className="form-control" placeholder='Enter Your Full Name' required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="control-label">Contact Number <sup className="text-danger">*</sup></label>
                                        <input type="number" name="" id="" className="form-control" placeholder='Enter Your Contact No.' required />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Eamil <sup className="text-danger">*</sup></label>
                                        <input type="email" name="" id="" className="form-control" placeholder='Enter Email' required />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">PAN <sup className="text-danger">*</sup></label>
                                        <input type="text" name="" id="" className="form-control" placeholder='Enter PAN' required />
                                    </div>

                                    <button type='submit' className='formActions'>Register</button>
                                </form>

                                <p className='mt-4 text-center fw-semibold'>Already have account?
                                    <Link className='formLinks' to="/login" relative="path"> Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 register_bg_image bs_cover"></div>
                </div>
            </div>
        </>
    )
}
