import React from "react";

import "./createadmins.scss";
import { useGetValue } from "../../../hooks/useGetValue";
import { useSignUpAdminMutation } from "../../../context/api/adminApi";

const initialState = {
  fname: "",
  lname: "",
  username: "",
  password: "",
  // role: "admin",
  phone: "",
};

const CreateAdmins = () => {
  const { formData, handleChange, setFormData } = useGetValue(initialState);
  const [signUp, { data }] = useSignUpAdminMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.role);

    signUp(formData);
  };

  return (
    <div className="create-admins">
      <form onSubmit={handleSubmit} className="create-admins__form" action="">
        <div className="create-admins__form__input">
          <label htmlFor="fname">First Name*</label>
          <input
            value={formData.fname}
            onChange={(e) => handleChange(e)}
            name="fname"
            id="fname"
            type="text"
            placeholder="first name"
          />
        </div>
        <div className="create-admins__form__input">
          <label htmlFor="lname">Last Name</label>
          <input
            value={formData.lname}
            onChange={(e) => handleChange(e)}
            name="lname"
            id="lname"
            type="text"
            placeholder="last name"
          />
        </div>
        <div className="create-admins__form__input">
          <label htmlFor="username">Username*</label>
          <input
            value={formData.username}
            onChange={(e) => handleChange(e)}
            name="username"
            id="username"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="create-admins__form__input">
          <label htmlFor="password">Password*</label>
          <input
            value={formData.password}
            onChange={(e) => handleChange(e)}
            name="password"
            id="password"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="create-admins__form__input">
          <label htmlFor="role">Role*</label>
          <select
            value={formData.role}
            onChange={(e) => handleChange(e)}
            name="role"
            id="role"
          >
            <option defaultValue={"admin"} value="admin">
              Admin
            </option>
          </select>
        </div>
        <div className="create-admins__form__input">
          <label htmlFor="phone">First Name*</label>
          <input
            value={formData.phone}
            onChange={(e) => handleChange(e)}
            name="phone"
            id="phone"
            type="text"
            placeholder="phone number"
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default CreateAdmins;
