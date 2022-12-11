import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./sign-in.css";
import { loginUser } from "../../axios/auth.axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      email,
      password,
    }).then((res) => {
      dispatch({
        type: "CREATE_USER",
        payload: res.data,
      });
      setEmail('')
      setPassword('')
      window.location.href='/dashboard'
    }).catch(err=>{
      console.log(err);
    })
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button>Login</button>
      </form>
    </div>
  );
};

export default SignIn;
