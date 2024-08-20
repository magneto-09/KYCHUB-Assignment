import React, { useEffect, useState } from "react";
import { Modal, Table, Checkbox, Button } from "antd";

const ProductsModal = ({ visible, onClose, selectedProducts, onSelect }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (visible) {
      fetchProducts();
    }
  }, [visible]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setAllProducts(data.products);
  };

  const modalColumns = [
    {
      title: "Select",
      dataIndex: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedProducts.some((p) => p.id === record.id)}
          onChange={() => onSelect(record)}
          disabled={
            selectedProducts.length >= 4 &&
            !selectedProducts.some((p) => p.id === record.id)
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

  return (
    <Modal
      title="Select Products for Comparison"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <Table
        columns={modalColumns}
        dataSource={allProducts}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </Modal>
  );
};

export default ProductsModal;
