import React from "react";
import { Fragment, Route } from "react";
// import AvailableMeals from "../Meals/AvailableMeals";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/Mbanner.png";
import logoImage from "../../img/logo_.gif";
import classes from "./Header.module.css";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        
      {/* <Route path="/" element={<AvailableMeals />}> */}
        <img src={logoImage} alt="A table full of delicious food!" />
        <h1>Burger King</h1>
        {/* </Route> */}
        {/* <HeaderCartButton /> */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
