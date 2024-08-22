import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./sidebar.scss";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

const Sideber = ({ role }) => {
  return (
    <div className="sidebar">
      <Link to={"/"}>
        <h1>Dashboard</h1>
      </Link>
      <div className="sidebar__links">
        {role === "owner" ? (
          <>
            <NavLink to={"/admin/createadmins"}>
              <IoCreateOutline /> Create Admins
            </NavLink>
            <NavLink to={"/admin/manageadmins"}>
              <MdOutlineDashboardCustomize /> Manage Admins
            </NavLink>
          </>
        ) : (
          <></>
        )}
        <NavLink to={"/admin/createproducts"}>
          <IoCreateOutline /> Create Products
        </NavLink>
        <NavLink to={"/admin/manageproducts"}>
          <MdOutlineDashboardCustomize /> Manage Products
        </NavLink>
      </div>
    </div>
  );
};

export default Sideber;
