import React, { useEffect, useState } from "react";
import { useGetAllCategoriesQuery } from "../../../context/api/categoryApi";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "./createproducts.scss";

const initialState = {
  title: "",
  description: "",
  price: "",
  oldPrice: "",
  categoryId: "",
  rating: 0,
  stock: "",
  photos: [],
  units: "",
};

const CreateProducts = () => {
  const { data: categoryData } = useGetAllCategoriesQuery();
  const [messageApi, contextHolder] = message.useMessage();
  const [productData, setProductData] = useState(initialState);
  const [
    createProduct,
    { data: createdData, isError, isSuccess, isLoading, error: dataError },
  ] = useCreateProductMutation();

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

  let categories = categoryData?.payload?.map((category) => (
    <option key={category._id} value={category._id}>
      {category.title}
    </option>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFilesChange = (e) => {
    const photos = e.target.files;
    setProductData((prevData) => ({
      ...prevData,
      photos: Array.from(photos),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in productData) {
      if (key === "photos") {
        productData.photos.forEach((file) => {
          formData.append("photos", file);
        });
      } else {
        formData.append(key, productData[key]);
      }
    }

    try {
      await createProduct(formData).unwrap();
      setProductData(initialState);
      navigate("/admin/productManage");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="create-products">
      <form className="create-products__form" onSubmit={handleSubmit} action="">
        <div className="create-products__form__input">
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={productData.title}
            required
          />
        </div>
        <div className="create-products__form__input">
          <label htmlFor="price">Price*</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-products__form__input">
          <label htmlFor="oldPrice">Old Price*</label>
          <input
            type="number"
            id="oldPrice"
            name="oldPrice"
            onChange={handleChange}
            value={productData.oldPrice}
            required
          />
        </div>
        <div className="create-products__form__input">
          <label htmlFor="categoryId">Category*</label>
          <select
            name="categoryId"
            id="categoryId"
            value={productData.categoryId}
            onChange={handleChange}
            required
          >
            {categories}
          </select>
        </div>
        <div className="create-products__form__input">
          <label htmlFor="stock">Stock*</label>
          <input
            type="number"
            id="stock"
            name="stock"
            onChange={handleChange}
            value={productData.stock}
            required
          />
        </div>
        <div className="create-products__form__input">
          <label htmlFor="units">Units*</label>
          <select
            name="units"
            id="units"
            value={productData.units}
            onChange={handleChange}
            required
          >
            <option value="">Select Units</option>
            <option value="kg">kg</option>
            <option value="m">m</option>
            <option value="litr">litr</option>
            <option value="dona">dona</option>
          </select>
        </div>
        <div className="create-products__form__input">
          <label htmlFor="desc">Description*</label>
          <textarea
            type="text"
            id="desc"
            name="description"
            onChange={handleChange}
            value={productData.description}
            required
          />
        </div>
        <div className="create-products__form__input-photo">
          <label htmlFor="photos">Photos*</label>
          <input
            type="file"
            id="photos"
            name="photos"
            multiple
            onChange={handleFilesChange}
            required
          />
        </div>
        {contextHolder}
        <button>
          {isLoading ? (
            <Spin
              indicator={<LoadingOutlined spin style={{ color: "#fff" }} />}
            />
          ) : (
            "Create Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateProducts;
