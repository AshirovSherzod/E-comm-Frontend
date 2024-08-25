import React, { useEffect, useState } from "react";
import { Space, Table, Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./managecategory.scss";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
} from "../../../context/api/categoryApi";
import Modal from "../../../components/modal/Modal";

const ManageCategory = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [
    createCategory,
    { data: createdData, isLoading, isSuccess, isError, error: dataError },
  ] = useCreateCategoryMutation();

  const { data: categoryData } = useGetAllCategoriesQuery();
  const [
    deleteCategory,
    { data: deletedCategory, isSuccess: isSuccessCategory },
  ] = useDeleteCategoryMutation();

  const [updateCategory, { data: updatedData }] = useUpdateCategoryMutation();

  const error = () => {
    messageApi.open({
      type: "error",
      content: `${dataError?.data?.msg}`,
    });
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: `${createdData?.msg}`,
    });
  };

  useEffect(() => {
    if (isError) {
      error();
    }
    if (isSuccess) {
      success();
    }
  }, [isError, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newObj = {
      title,
    };
    createCategory(newObj);
    setTitle("");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let updateObj = {
      title: editValue,
    };
    updateCategory({ id: editId, body: updateObj });
  };

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
            className="delete-btn"
            onClick={() => {
              setId(record.id);
              setModal(true);
            }}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => {
              setEditValue(record.category);
              setEditId(record.id);
              setEditModal(true);
            }}
          >
            Edit
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
      <div className="manage-category__top">
        <form
          onSubmit={handleSubmit}
          className={`${showForm ? "" : "hidden"}`}
          action=""
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="category name"
            required
          />
          {contextHolder}
          <button>
            {isLoading ? (
              <Spin
                indicator={<LoadingOutlined spin style={{ color: "#fff" }} />}
              />
            ) : (
              "Create Category"
            )}
          </button>
        </form>
        <button
          onClick={() => {
            setShowForm((prev) => !prev);
          }}
        >
          {showForm ? "Close Category" : "Create Category"}
        </button>
      </div>
      <Table columns={columns} dataSource={data} />
      {modal ? (
        <Modal setModal={setModal}>
          <div className="modals">
            <h4>Do you want to delete this category?</h4>
            <div className="btns">
              <button onClick={() => setModal(false)} className="cancel">
                Cancel
              </button>
              {contextHolder}
              <button
                onClick={() => {
                  deleteCategory(id);
                  setModal(false);
                }}
                className="delete"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
      {editModal ? (
        <Modal setModal={setEditModal}>
          <form onSubmit={handleEditSubmit} className="edit-category" action="">
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              type="text"
              placeholder="Edit category"
            />
            <button>Edit Category</button>
          </form>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ManageCategory;
