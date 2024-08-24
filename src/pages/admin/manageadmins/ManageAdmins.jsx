import React from "react";
import { Space, Table } from "antd";

import "./manageadmins.scss";
import {
  useDeleteAdminMutation,
  useGetAdminsQuery,
} from "../../../context/api/adminApi";

const ManageAdmins = () => {
  const { data: adminsData } = useGetAdminsQuery();
  const [deleteAdmin, { data: deleteAdminData }] = useDeleteAdminMutation();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button>Edit</button>
        </Space>
      ),
    },
  ];

  const data =
    adminsData?.payload?.map((admin, inx) => ({
      key: `${inx}`,
      name: `${admin.fname} ${admin.lname}`,
      username: `${admin.username}`,
      phone: `${admin.phone}`,
      role: admin.role,
      id: admin._id,
    })) || [];

  return (
    <div className="manage-admins">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ManageAdmins;
