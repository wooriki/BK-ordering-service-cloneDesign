import classes from "./Card.module.css";
import { Link } from 'react-router-dom';

const Card = (props) => {
  return <div className={classes.card}>
          <div className='at'  style={{
              marginTop:"1rem",
              marginLeft:"1rem",
          }}>
            <Link to="/" style={{
              backgroundColor:"rgb(255, 115, 0)",
              padding:"0.5rem",
              paddingRight:"1rem",
              paddingLeft:"1rem",
          }}>햄버거</Link>
            <Link to="/Desert" style={{
              backgroundColor:"rgb(255, 115, 0)",
              padding:"0.5rem",
              paddingRight:"1rem",
              paddingLeft:"1rem",
          }}>디저트</Link>
            <Link to="/Chick" style={{
              backgroundColor:"rgb(255, 115, 0)",
              padding:"0.5rem",
              paddingRight:"1rem",
              paddingLeft:"1rem",
          }}>치킨</Link>
            <Link to="/Drink" style={{
              backgroundColor:"rgb(255, 115, 0)",
              padding:"0.5rem",
              paddingRight:"1rem",
              paddingLeft:"1rem",
          }}>음료&아이스</Link>
          </div>
          <h2>햄버거</h2>
        {props.children}
        </div>;
};
export default Card;

// style={{
  // backgroundColor:"rgb(255, 115, 0)",
  // padding:"0.5rem",
  // paddingRight:"1rem",
  // paddingLeft:"1rem",
//   fontSize:"1.2rem",
//   fontWeight:"bold",
//   color: "white",
//   borderRadius:"0.5rem",
//   marginRight:"0.4rem",
//   }}