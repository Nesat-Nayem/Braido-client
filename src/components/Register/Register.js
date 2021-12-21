import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "./../../hooks/useFirebase";

const Register = () => {
  const { googleSignIn, handleUserRegister } = useFirebase();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    handleUserRegister( data.email, data.password);
    console.log(data);
  };
  return (
    <div>
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
          className="col-4"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      
      </form>

      <p className="mt-5">Already Have An Account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
