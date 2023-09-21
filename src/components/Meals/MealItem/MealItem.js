/* eslint-disable */
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
// import useParams from 'react-router-dom';
import CartContext from "../../../store/cart-context";
import { Link } from 'react-router-dom';
// import food from "../../../img/m1.png";

const MealItem = (props) => {
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
  <div className={classes.meal}>
    <div className="row">
      <div className="col-md-4">
        <Link to="/foodInfo">
          <img src={process.env.PUBLIC_URL + '/img' + '/' + '/bur' + '/'  + props.id + '.png'}
            style={{width : '75%', marginTop: '-1.5rem',marginLeft:'-1rem', cursor:'pointer'}}/>
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
    // <li className={classes.meal}>
    //   <div className='items'>
    //   <img src={food} style={{width : '150px'}}/>
    //     <div>{props.image}</div>
    //     <h3>{props.name}</h3>
    //     {/* <div className={classes.description}>{props.description}</div> */}
    //     <div className={classes.price}>{price}</div>
    //   </div>
      
    //   <div>
    //     <MealItemForm onAddToCart={addToCartHandler} />
    //   </div>
    // </li>
  );
};

export default MealItem;
