import React from 'react'
import Logo from './images/logo.png';
import { Link } from "react-router-dom";


export const ForgotPassword = () => {
    return (
        <>
            <div className='forgotPasswordPage'>
                <div className="row mx-auto h-100">
                    <div className="col-md-6">
                        <div className="changePassword formWrapper">
                            <div className="w-100">
                                <div className="formLogo mx-auto">
                                    <img className='img-fluid' src={Logo} alt="Logo" />
                                </div>
                                <h1>Change Your Password</h1>
                                <span className='d-block text-center text-secondary'>Enter Your Email to Change Password</span>
                                <form action="" className='main_forms'>
                                    <div className="form-group">
                                        <label className="control-label">Eamil <sup className="text-danger">*</sup></label>
                                        <input type="email" name="" id="" className="form-control" placeholder='Enter Email' required />
                                    </div>
                                    
                                    <button type='submit' className='formActions'>Change Password</button>
                                    <Link className='backtoLogin' to="/login" relative="path"> Go Back</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 changePass_bg bs_cover"></div>
                </div>
            </div>
        </>
    )
}
