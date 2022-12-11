import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { signUpUser } from "../../axios/auth.axios";
import { generateOTP } from "../../axios/validate.axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [confirmOTP, setConfirmOTP] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser({
      email,
      username,
      password,
      confirmPassword,
      age,
      phoneNumber,
      OTP,
      confirmOTP,
    })
      .then((res) => {
        dispatch({
          type: "CREATE_USER",
          payload: res.data,
        });
        setAge("");
        setConfirmOTP("");
        setConfirmPassword("");
        setEmail("");
        setOTP("");
        setPassword("");
        setPhoneNumber("");
        setUsername("");
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateOTPHandler = async () => {
    await generateOTP(email)
      .then((res) => {
        setConfirmOTP(res.data.otp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="OTP"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button
            type="button"
            onClick={(e) => {
              generateOTPHandler();
            }}
          >
            Generate OTP
          </button>
        </div>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button>Create your account</button>
      </form>
      <>
        <img
          src="/img/background-2.jpg"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
        <div className="container mx-auto p-4">
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[30rem] -translate-y-2/4 -translate-x-2/4">
            <form onSubmit={(e) => handleSubmit(e)}>
              <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="white">
                  Sign Up
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                  <Input
                    variant="standard"
                    type="email"
                    label="Email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    variant="standard"
                    type="text"
                    label="Name"
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-row">
                  <Input
                    variant="standard"
                    type="text"
                    label="Phone Number"
                    size="lg"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Input
                    variant="standard"
                    type="text"
                    label="Age"
                    size="lg"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="flex flex-row">
                  <Input
                    variant="standard"
                    type="text"
                    label="OTP"
                    size="lg"
                    value={OTP}
                    onChange={(e) => setOTP(e.target.value)}
                  />
                  <Button variant="gradient" fullWidth onClick={(e) => {
                    e.stopPropagation()
              generateOTPHandler();
            }}>
                    Send OTP
                  </Button>
                </div>

                <Input
                  variant="standard"
                  type="password"
                  label="Password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  variant="standard"
                  type="password"
                  label="Confirm Password"
                  size="lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                  Sign Up
                </Button>
                <Typography
                  variant="small"
                  className="mt-6 flex justify-center"
                >
                  Already have an account?
                  <Link to="/login">
                    <Typography
                      as="span"
                      variant="small"
                      color="blue"
                      className="ml-1 font-bold"
                    >
                      Sign in
                    </Typography>
                  </Link>
                </Typography>
              </CardFooter>
            </form>
          </Card>
        </div>
        {/* <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div> */}
      </>
    </div>
  );
};

export default Signup;
