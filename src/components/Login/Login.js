import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import useFirebase from "./../../hooks/useFirebase";
import { Link } from "react-router-dom";
const Login = () => {
  const [logInData,setLogInData] = useState({});
  
  const { 
    handleGoogleLogin, 
    handleUserLogin } = useFirebase();
  const { register, handleSubmit} = useForm();

  const handleOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = {...logInData};
    newLogInData[field] = value;
    setLogInData(newLogInData);
    
  }

  const handleLogInSubmit = e => {
    e.preventDefault();
  }
const onSubmit = (data) => {
  handleUserLogin(data.email, data.password)

}

const handleGoogleLoginMain = () => {
    handleGoogleLogin()

}

  return (
 
    <div className="login-form mb-5 ">
            <div>
                <h2>Please Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
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

