import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/netflix.svg";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, signUp } = useAuth();
  const onSubmit = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="loginParent">
      <Head>
        <title>Netflix - Login</title>
      </Head>
      <div className="blender"></div>
      <div className="loginHeader">
        <Image src={logo} width={160} height={160} />
      </div>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ color: "whitesmoke" }}>Sign In</h1>
        <label>
          <input
            type="email"
            placeholder="Enter Email"
            className="inp"
            {...register("email", { required: true })}
          />
          {/* {errors.email && <span style={{ color: 'red' }}>Please enter an valid Email</span>} */}
        </label>
        <label>
          <input
            type="password"
            placeholder="Enter Password"
            className="inp"
            {...register("password", { required: true })}
          />
          {/* {errors.password && <span>This field is required</span>} */}
        </label>
        <button className="signInBtn" onClick={() => setLogin(true)}>
          Sign In
        </button>
        <div className="signUp">
          <p>New to Netflix ?</p>
          <button type="submit" onClick={() => setLogin(false)}>
            Sign Up Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
