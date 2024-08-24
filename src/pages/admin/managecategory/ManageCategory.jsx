import React, { useState } from "react";
import { Space, Table } from "antd";

import "./managecategory.scss";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../context/api/categoryApi";
import Modal from "../../../components/modal/Modal";

const ManageCategory = () => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const { data: categoryData } = useGetAllCategoriesQuery();
  const [deleteCategory, { data: deletedCategory }] =
    useDeleteCategoryMutation();
  console.log(categoryData);

  const columns = [
    {
      title: "Created By",
      dataIndex: "created",
      key: "created",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              setId(record.id);
              setModal(true);
            }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const data =
    categoryData?.payload?.map((category, inx) => ({
      key: `${inx}`,
      created: `${category.adminId ? category.adminId.fname : ""}`,
      category: `${category.title}`,
      id: category._id,
    })) || [];
  return (
    <div className="manage-category">
      <Table columns={columns} dataSource={data} />
      {modal ? (
        <Modal setModal={setModal}>
          <h4>Do you want to delete this category?</h4>
          <div className="btns">
            <button onClick={() => deleteCategory(id)} className="delete">
              Delete
            </button>
            <button onClick={() => setModal(false)} className="cancel">
              Cancel
            </button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ManageCategory;
