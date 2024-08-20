import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Checkbox, Button } from "antd";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();
  // api  url
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    };

    fetchProducts();
  }, []);

  const handleSelect = (product) => {
    let updatedSelection = [...selectedProducts];
    if (updatedSelection.includes(product)) {
      updatedSelection = updatedSelection.filter((p) => p.id !== product.id);
    } else {
      if (updatedSelection.length < 4) {
        updatedSelection.push(product);
      }
    }
    setSelectedProducts(updatedSelection);
  };
  //  table ant design
  const columns = [
    {
      title: "Select",
      dataIndex: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedProducts.includes(record)}
          onChange={() => handleSelect(record)}
          disabled={
            selectedProducts.length >= 4 && !selectedProducts.includes(record)
          }
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];
  ///compare-page
  const handleCompare = () => {
    navigate("/compare-page", { state: { products: selectedProducts } });
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={handleCompare}
        disabled={selectedProducts.length === 0}
      >
        Compare Products
      </Button>
      {selectedProducts.length >= 4 && (
        <p style={{ color: "red" }}>You can select a maximum of 4 products.</p>
      )}
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ProductDetailsPage;
