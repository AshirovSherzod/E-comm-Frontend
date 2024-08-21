import React from "react";

import "./adminheader.scss";

const AdminHeader = ({ fname, lname, role, icon }) => {
  return (
    <div className="admin-header">
      <div className="admin-header__profile">
        <div className="admin-header__profile-img">{icon}</div>
        <div className="admin-header__profile-content">
          <h2>
            {fname} {lname}
          </h2>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
