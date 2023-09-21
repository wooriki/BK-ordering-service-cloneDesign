import classes from "./CardFood.module.css";

const CardFood = (props) => {
  return <div className={classes.CardFood}>{props.children}</div>;
};
export default CardFood;
