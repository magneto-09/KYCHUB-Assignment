import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "antd";
import ProductsModal from "../components/ModalComponent";

const CompareProduct = () => {
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState(
    location.state?.products || []
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddMore = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleSelect = (product) => {
    let updatedSelection = [...selectedProducts];
    if (updatedSelection.some((p) => p.id === product.id)) {
      updatedSelection = updatedSelection.filter((p) => p.id !== product.id);
    } else {
      if (updatedSelection.length < 4) {
        updatedSelection.push(product);
      }
    }
    setSelectedProducts(updatedSelection);
  };

  const handleRemove = (productId) => {
    const updatedSelection = selectedProducts.filter((p) => p.id !== productId);
    setSelectedProducts(updatedSelection);
  };

  return (
    <div>
      <h2>Compare Products</h2>
      <div className="flex flex-wrap justify-center">
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-400 p-8 m-3 relative w-1/4"
          >
            <img src={product.thumbnail} alt={product.title} className="w-36" />
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-lg font-semibold text-blue-500">
              Price: ${product.price}
            </p>
            <p className="">
              {" "}
              <span className="text-lg text-orange-400">Brand:</span>{" "}
              {product.brand}
            </p>
            <p>Category: {product.category}</p>
            <Button
              className="bg-red-500 my-2"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </Button>
          </div>
        ))}
        {selectedProducts.length < 4 && (
          <Button type="primary" onClick={handleAddMore}>
            Add More
          </Button>
        )}
      </div>
      <ProductsModal
        visible={isModalVisible}
        onClose={handleModalClose}
        selectedProducts={selectedProducts}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default CompareProduct;
