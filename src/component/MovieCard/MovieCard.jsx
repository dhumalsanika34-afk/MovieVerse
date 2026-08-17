import React, { useState, useEffect } from "react";
import "./MovieCard.css";

function MovieCard({ name, director, description, image, rating, price }) {
  const [quantity, setQuantity] = useState(1);
  
  const numericPrice = parseInt(price.replace("₹", ""));
const totalPrice = numericPrice * quantity;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);

  useEffect(() => {
    if (quantity < 1) {
      alert("⚠️ Quantity cannot be less than 1");
      setQuantity(1);
    }
    if (quantity > 9) {
      alert("⚠️ Quantity cannot be more than 9");
      setQuantity(9);
    }
  }, [quantity]);
  return (
    <div className="movie-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p>{description}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Price:</strong> {price}</p>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <span style={{ margin: "10px" }}>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <h3>Total Price: ₹{totalPrice}</h3>
      <p>
        Added {quantity} ticket{quantity > 1 ? "s" : ""} to cart
      </p>
      <button>Watch Now</button>
    </div>
  );
}

export default MovieCard;
