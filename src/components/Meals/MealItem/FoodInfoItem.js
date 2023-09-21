import classes from "./../FoodInfoItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
// import useParams from 'react-router-dom';
import CartContext from "../../../store/cart-context";
import { Routes, Route, Link, useNavigate, Outlet  } from 'react-router-dom';
// import food from "../../../img/m1.png";

const FoodInfo = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `￦${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      image:props.image,
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  // console.log(props.id);
  // console.log(props.price);


  return (
  <div className={classes.meals}>
    <div className="row">
      <div className="col-md-4" >
        
        {/* <img src = {"https://codingapple1.github.io/shop/shoes' + props.i +'.jpg"} */}
        <Link to="/foodInfo">
          <img src={process.env.PUBLIC_URL + '/img' + '/' + '/bur' + '/'  + props.id + '.png'}
            style={{width : '65%', marginLeft:'-1rem', cursor:'pointer'}}/>
        </Link><br/>
        {/* <div>{props.image}</div> */}
        <h3>{props.name}</h3>
        <div className={classes.price}>{price}</div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
      </div>
    </div>
  </div> 
  );
};

export default FoodInfo;
