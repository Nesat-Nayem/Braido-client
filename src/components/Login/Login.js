import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {

  const location = useLocation();
  console.log('come here', location.state?.from);
  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    handleUserLogin(data.email, data.password);
    
  }
  const { handleUserLogin } = useAuth();

  const { register, handleSubmit} = useForm();



// const handleOnSubmit = () =>{
//   onSubmit();
  
// }



  return (
 
    <div className="login-form mb-5 ">
            <div>
                <h2>Please Login</h2>
              <form onSubmit={handleSubmit(onSubmit,location,navigate)}>
        <input
          className="col-4 mb-2"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="form-group col-4"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Log In"
        />
      
      </form>

                <p className="mt-5">New Here? <Link to="/register">Create Account</Link></p>
            </div>


          
        </div>
  );
};

export default Login;

