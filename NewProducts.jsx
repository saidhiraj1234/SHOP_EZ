import React from "react";
import "../styles/NewProducts.css";


const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1499,
    image: "https://via.placeholder.com/200"
  }
];

const NewProducts = () => {
  return (
    <div className="new-products">
      <h2>New Arrivals</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
