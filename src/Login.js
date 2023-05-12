import React from 'react';
import GoogleImg from './images/google.svg';
import Logo from './images/logo.png';
import {Link} from "react-router-dom";
import {useFormik} from 'formik';
import {loginSchema} from './schemas';

const initialValues = {
    userEmail: '',
    userPassword: '',
    
}

const Login = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:loginSchema,
        onSubmit : (values) => {
            console.log(values);
        }
    });
    
    return (
        <>
            <div className="loginPage">
                <div className="row mx-0 h-100">
                    <div className="col-md-6">
                        <div className="loginForm formWrapper">
                            <div className='w-100'>
                                <div className="formLogo mx-auto">
                                    <img className='img-fluid' src={Logo} alt="Logo" />
                                </div>
                                <h1>Welcome Back</h1>
                                <span className='d-block text-center text-secondary'>Enter Your login Details Below</span>
                                <div className="logingSocial">
                                    <button className='socailBtn'><img src={GoogleImg} alt="Google" /> Google</button>
                                </div>

                                <div className="orText">or with Email</div>

                                <form onSubmit={handleSubmit} className='main_forms' noValidate>
                                    <div className="form-group">
                                        <label className="control-label">Eamil <sup className="text-danger">*</sup></label>
                                        <input 
                                            type="email" name="userEmail" id="userEmail" 
                                            className="form-control" placeholder='Enter Email' 
                                            autoComplete='off' 
                                            value={values.userEmail} 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                       { errors.userEmail && touched.userEmail ?  <p className='formError'>{errors.userEmail}</p> : null}
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Password <sup className="text-danger">*</sup></label>
                                        <input 
                                            type="password" name="userPassword" id="userPassword" 
                                            className="form-control" placeholder='Your Password' 
                                            autoComplete='off' 
                                            value={values.userPassword} 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        { errors.userPassword && touched.userPassword ?  <p className='formError'>{errors.userPassword}</p> : null}
                                    </div>

                                    <div className="forgotpass">
                                        <Link className='formLinks' to="/ForgotPassword" relative="path"> Forgot Password ?</Link>
                                    </div>

                                    <button type='submit' className='formActions'>Login</button>
                                </form>

                                <p className='mt-4 text-center fw-semibold'>Dont have account?
                                    <Link className='formLinks' to="/register" relative="path"> Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 login_bg_image bs_cover"></div>
                </div>
            </div>
        </>
    )
}

export default Login