import classes from "./Item.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
// import useParams from 'react-router-dom';
import CartContext from "../../../store/cart-context";
import { Link} from 'react-router-dom';
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
  <div className={classes.meal} style={{marginTop:"2.2rem"}}>
    <div className="row">
      <div className="col-md-4">
        <Link to="/foodInfo">
          <img src={process.env.PUBLIC_URL + '/img' + '/' + '/bur' + '/'  + props.id + '.png'}
            style={{width : '55%', float: 'left',marginLeft:'-1rem', cursor:'pointer'}}/>
        </Link><br/>
        {/* <div>{props.image}</div> */}
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <div className={classes.price}  style={{fontSize:"1.7rem"}}>{price}</div>
      <div>
        <div style={{marginRight:"2rem"}}>
            <MealItemForm onAddToCart={addToCartHandler} />
        </div>
        <input style={{width:"43%", height:"2rem", marginTop:"1.5rem", }}></input>
        <button style={{
            width:"40%", 
            height:"4rem",
            marginTop:"1.5rem",
            fontSize:"1.6rem"
            }}>Find Store</button>
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
