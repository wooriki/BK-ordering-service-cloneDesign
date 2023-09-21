import CardFood from "../UI/CardFood";
import classes from "./FoodInfoItem.module.css";
// import { useContext } from "react";
// import CartContext from "../../../src/store/cart-context";
import Item from "./MealItem/Item";
// import { useParams } from 'react-router-dom';
// import food from './img/m1.png';



const DUMMY_MEALS = [
  {
    id: "m1",
    name: "스모키 바비큐 몬스터",
    description: "스모크향이 한 입 가득, 바비큐 패티의 풍미",
    price: 69,
  },
  {
    id: "m2",
    name: "스모키 바비큐 와퍼",
    description: "스모크향이 한 입 가득, 바비큐 패티의 와퍼",
    price: 55,
  },
  {
    id: "m3",
    name: "스모키 바비큐 X",
    description: "스모크향이 스며든 바비큐 패티와 특별한 번",
    price: 45,
  },
  {
    id: "m4",
    name: "치킨킹BLT",
    description: "버거킹만의 특별한 신제품! 치킨 샌드위치",
    price: 84,
  },
  {
    id: "m5",
    name: "치킨킹",
    description: "버거킹만의 특별한 신제품!",
    price: 74,
  },  
  {
    id: "m6",
    name: "BLT오믈렛킹모닝",
    description: "간단하지만 든든한 한 끼 선택",
    price: 57,
  },
  {
    id: "m7",
    name: "오믈렛킹모닝",
    description: "간단하지만 든든한 한 끼 선택",
    price: 97,
  },
];
// console.log(DUMMY_MEALS[0].image);

const FoodInfo = (a, i) => {
  // let {id} = useParams();
  
  
  const mealsList = DUMMY_MEALS.map((meal) => (
    <Item
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      />
      ));
      // console.log(mealsList[id])

  return (
    <section className={classes.meals}>
      <CardFood>
          
          <div className="z">
            {mealsList[2]}
          </div>
        {/* <ul>{mealsList}</ul> */}
      </CardFood>
    </section>

  );
};

export default FoodInfo;
