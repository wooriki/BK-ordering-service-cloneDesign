import classes from "./MealsSummary.module.css";
import { useNavigate } from 'react-router-dom';
// import FindStore from "../../FindStore";

const MealsSummary = () => {
  const navigate = useNavigate();
  

  return (
    <section className={classes.summary}>

      <h2>Melt Meals are here for you. </h2>
      <p>
        맛있는 즐거움이 찾아온다!<br/>
        Burger King에서 빠르고 편리하게 주문하세요.
      </p>
      <p>
        
      </p>
      <button onClick={()=>{navigate('/FindStore')}}>매장 찾기</button>
      <button onClick={()=>{}}>공유</button>
    </section>
  );
};

export default MealsSummary;
