import React, { useEffect, useState } from "react";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slices/authSlice";
import { GoArrowUpLeft } from "react-icons/go";

import "./signin.scss";
import { useSignInAdminMutation } from "../../context/api/adminApi";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, { data, isLoading, isSuccess, isError, error: dataError }] =
    useSignInAdminMutation();

  const error = () => {
    messageApi.open({
      type: "error",
      content: `${dataError?.data?.msg}`,
    });
  };

  useEffect(() => {
    if (isError) {
      error();
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.payload?.token));
      navigate("/admin/manageproducts");
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminData = {
      username,
      password,
    };
    signIn(adminData);
  };

  return (
    <section className="sign-in container">
      <Link to={"/"}>
        <GoArrowUpLeft /> Go Home
      </Link>
      <form onSubmit={handleSubmit} className="sign-in__form" action="">
        <div className="sign-in__form-input">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="sign-in__form-input">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="text"
            placeholder="Password"
          />
        </div>
        {contextHolder}
        <button className="sign-in__form-btn">
          {isLoading ? (
            <Spin
              indicator={<LoadingOutlined spin style={{ color: "#fff" }} />}
            />
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </section>
  );
};

export default SignIn;
