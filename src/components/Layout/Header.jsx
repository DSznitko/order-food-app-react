import React from "react";
import BgcImg from "../../assets/images/header-bgc.jpg";
import "./Header.css";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Tasty Meals</h1>
        <HeaderButton />
      </header>
      <div className="main-img">
        <img className="main-img--img" src={BgcImg} alt="background" />
      </div>
    </>
  );
};

export default Header;
