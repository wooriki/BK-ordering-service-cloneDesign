import CardChick from "../UI/CardChick";
import classes from "./AvailableMeals.module.css";
import ChickItem from "./MealItem/ChickItem";

// import food from './img/m1.png';



const DUMMY_MEALS = [
  {
    id: "ck1",
    name: "칙 필레",
    description: "클래식치즈버거",
    price: 35,
  },
  {
    id: "ck2",
    name: "치킨 하프팩",
    description: " 시리즈",
    price: 90,
  },
  {
    id: "ck3",
    name: "하프팩 & 소스3종",
    description: " 시리즈",
    price: 120,
  },
  {
    id: "ck4",
    name: "치킨풀팩",
    description: "완성한 프리미엄 햄버거",
    price: 180,
  },
  {
    id: "ck5",
    name: "치킨풀팩 & 콘샐러드",
    description: "특제소스로 완성한 프리미엄 햄버거",
    price: 200,
  },
];
// console.log(DUMMY_MEALS[0].image);

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <ChickItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <CardChick>
        <ul>{mealsList}</ul>
      </CardChick>
    </section>
  );
};
export default AvailableMeals;
