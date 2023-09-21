/* eslint-disable */
import { useState, React } from "react";
// { Fragment, useState }
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Layout/Header";
// import Meals from "./components/Meals/Meals";

import AvailableMeals from "./components/Meals/AvailableMeals";
import FoodInfo from "./components/Meals/FoodInfo";
import MealsSummary from "./components/Meals/MealsSummary";
import Desert from "./components/Meals/Desert";
import Chick from "./components/Meals/Chick";
import Drink from "./components/Meals/Drink";
import FindStore from "./FindStore";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Sw from "./Swiper";

import Kakao from "./Kakao";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    // let navigate = useNavigate();
    let [shoes] = useState();

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            {/* <Route path="/FindStore" element={<FindStore />}/> */}

            {/* <Link to="/FindStore">디저트</Link> */}
            <br />
            <Routes>
                <Route path="/FindStore" element={<FindStore />} />
            </Routes>

            {/* <Route path="/FindStore" element={<FindStore />}/> */}
            {/* <Link to="/">버거</Link><br/>
        <Link to="/Desert">디저트</Link><br/>
        <Link to="/Chick">치킨</Link><br/>
        <Link to="/Drink">음료&아이스</Link><br/>
      <Link to="/foodInfo">dd</Link><br/> */}
            {/* <Link onClick={()=>{ navigate('<Desert />') }}>디저트</Link> */}
            {/* <Link to="/FindStore">매장</Link><br/> */}

            <main>
                <MealsSummary />
                <Sw />
                <Routes>
                    <Route path="/" element={<AvailableMeals />} />
                    <Route
                        path="foodInfo"
                        element={<FoodInfo shoes={shoes} />}
                    />
                    <Route path="/Desert" element={<Desert />} />
                    <Route path="/Chick" element={<Chick />} />
                    <Route path="/Drink" element={<Drink />} />
                    <Route path="*" element={<div>404</div>} />
                    <Route />
                </Routes>
            </main>
        </CartProvider>
    );
}

export default App;
