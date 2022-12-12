import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation, Outlet } from "react-router-dom";

import { validateUser } from "../axios/validate.axios";

const UserRoute = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);
  useEffect(() => {
    if (user && user.token) {
      validateUser(user.token)
        .then((res) => {
          if (!res.data.user) {
            dispatch({ type: "SET_USER", payload: null });
            toast.success("Please sign in to continue");
            navigate("/singin");
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: "SET_USER", payload: null });
          toast.error("Please sign in to continue");
        });
    } else {
      if (location.pathname !== "/signin") {
        navigate("/signin");
      }
    }
  }, [dispatch, user, location.pathname, navigate]);

  return user && user.token.length ? (
        <div className="outlet">
          <Outlet />
        </div>
  ) : (
    <Navigate to="signin" />
  );
};

export default UserRoute;
