import React from "react";
import "./HeaderButton.css";
import { TiShoppingCart } from "react-icons/ti";

const HeaderButton = () => {
  return (
    <button className="header-button">
      <span className="header-icon">
        <TiShoppingCart />
      </span>
      <span>Your Order</span>
      <span className="order-amount">2</span>
    </button>
  );
};

export default HeaderButton;
