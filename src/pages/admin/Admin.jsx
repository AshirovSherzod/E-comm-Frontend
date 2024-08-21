import React from "react";
import { Outlet } from "react-router-dom";

import "./admin.scss";
import Sideber from "../../components/sidebar/Sideber";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import { useGetProfileQuery } from "../../context/api/adminApi";

const Admin = () => {
  const { data } = useGetProfileQuery();
  console.log(data);
  return (
    <main className="admin">
      <Sideber role={data?.payload?.role} />
      <div className="admin__content">
        <AdminHeader
          fname={data?.payload?.fname}
          lname={data?.payload?.lname}
          role={data?.payload?.role}
          icon={data?.payload?.fname.split("")[0]}
        />
        <Outlet />
      </div>
    </main>
  );
};

export default Admin;
