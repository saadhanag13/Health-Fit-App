import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./app.css";

import Signup from "./Pages/signup/Sign-up";
import SignIn from "./Pages/signin/sign-in";
import Dashboard from "./Pages/dashboard/Dashboard";
import Home from "./Pages/Home";
import { Navbar } from "./widgets/layout";
import UserRoute from "./routes/User.route";

function App() {
  const { user } = useSelector((state) => ({ ...state }));
  let userRoutes = user
    ? [
        {
          // icon: UserCircleIcon,
          name: "Dashboard",
          path: "/dashboard",

          element: <Dashboard />,
        },
      ]
    : [
        {
          // icon: ArrowRightOnRectangleIcon,
          name: "Sign In",
          path: "/signin",
          element: <SignIn />,
        },
        {
          // icon: UserPlusIcon,
          name: "Sign Up",
          path: "/signup",
          element: <Signup />,
        },
      ];
  const routes = [
    {
      // icon: HomeIcon,
      name: "Home",
      path: "/",
      element: <Home />,
    },
    ...userRoutes,
  ];
  return (
    <Router>
      <div className="main-body">
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {user ? (
              <Route path="/" element={<UserRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
          ) : (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<div>404</div>} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
