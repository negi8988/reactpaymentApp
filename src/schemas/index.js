import * as Yup from "yup";

export const loginSchema = Yup.object({
    userEmail: Yup.string().email().required("Please Enter Your Email"),
    userPassword: Yup.string().required("Please Enter Your Password"),

});


export const signupSchema = Yup.object({
    
})