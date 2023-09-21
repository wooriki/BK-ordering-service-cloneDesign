import classes from "./CardDesrt.module.css";
import { Link } from 'react-router-dom';
const CardDesrt = (props) => {
  return <div className={classes.CardDesrt}>
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
          <h2>디저트</h2>
        {props.children}
        </div>;
};
export default CardDesrt;
