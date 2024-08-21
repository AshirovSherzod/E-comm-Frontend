import React from "react";
import { Space, Table } from "antd";

import "./manageproducts.scss";
import { useGetProductsQuery } from "../../../context/api/productApi";

const ManageProducts = () => {
  const { data: productData, isLoading } = useGetProductsQuery();
  console.log(productData);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Units",
      dataIndex: "units",
      key: "units",
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data =
    productData?.payload?.map((product, inx) => ({
      key: `${inx}`,
      title: `${product.title}`,
      price: product.price,
      rating: product.rating,
      stock: product.stock,
      units: `${product.units}`,
      views: product.views,
    })) || [];

  return (
    <div className="manage-products">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ManageProducts;
