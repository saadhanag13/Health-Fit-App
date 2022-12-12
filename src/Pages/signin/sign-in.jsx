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
import BG from '../../img/background-2.jpg'

import "./sign-in.css";
import { loginUser } from "../../axios/auth.axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      email,
      password,
    })
      .then((res) => {
        dispatch({
          type: "CREATE_USER",
          payload: res.data,
        });
        setEmail("");
        setPassword("");
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        window.location.href = "/signin";
        console.log(err);
      });
  };

  return (
    <>
      <img
        src={BG}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
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
                type="password"
                label="Password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type='submit'>
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Link to="/signup">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div>
     
    </>
  );
};

export default SignIn;
