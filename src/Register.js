import React from 'react'
import { Link } from "react-router-dom";
import Logo from './images/logo.png';
import { useFormik } from 'formik';



const initialValues = {
    userEmail: '',
    userPassword: '',

}

export const Register = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values);
        }
    });

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

                                <form onSubmit={handleSubmit} className='main_forms' noValidate>
                                    <div className="form-group">
                                        <label className="control-label">Full Name <sup className="text-danger">*</sup></label>
                                        <input
                                            type="text" name="fullName" id="fullName" className="form-control"
                                            placeholder='Enter Your Full Name'
                                            autoComplete='off'
                                            value={values.fullName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.userEmail && touched.userEmail ? <p className='formError'>{errors.userEmail}</p> : null}
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Contact Number <sup className="text-danger">*</sup></label>
                                        <input type="number" name="contactNumber" id="contactNumber"
                                            className="form-control" placeholder='Enter Your Contact No.'
                                            autoComplete='off'
                                            value={values.contactNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Eamil <sup className="text-danger">*</sup></label>
                                        <input type="email" name="emailId" id="emailId"
                                            className="form-control" placeholder='Enter Email'
                                            autoComplete='off'
                                            value={values.emailId}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">PAN <sup className="text-danger">*</sup></label>
                                        <input type="text" name="panCard" id="panCard"
                                            className="form-control" placeholder='Enter PAN'
                                            autoComplete='off'
                                            value={values.panCard}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
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
