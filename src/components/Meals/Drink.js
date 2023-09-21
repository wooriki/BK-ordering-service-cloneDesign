import CardDrink from "../UI/CardDrink";
import classes from "./AvailableMeals.module.css";
import DrinkItem from "./MealItem/DrinkItem";

// import food from './img/m1.png';



const DUMMY_MEALS = [
  {
    id: "d1",
    name: "코카콜라",
    description: "두 장의 패티가 이루는 조화로운 맛에 든든함까지 추가된 더블 클래식치즈버거",
    price: 20,
  },
  {
    id: "d2",
    name: "코카콜라 제로",
    description: "두 장의 패티가 이루는 조화로운 맛에 든든함까지 추가된 더블버거 시리즈",
    price: 20,
  },
  {
    id: "d3",
    name: "아메리카노",
    description: "두 장의 패티가 이루는 조화로운 맛에 든든함까지 추가된 더블버거 시리즈",
    price: 15,
  },
  {
    id: "d4",
    name: "핫초코",
    description: "브리오쉬번에 국내산 한우를 사용한 패티, 신선한 야채, 특제소스로 완성한 프리미엄 햄버거",
    price: 20,
  },
  {
    id: "d5",
    name: "아이스초코",
    description: "자연산 모짜렐라 치즈와 고소한 베이컨이 만나 풍부한 맛의 버거",
    price: 20,
  },  
  {
    id: "d6",
    name: "스프라이트",
    description: "자연산 모짜렐라 치즈와 고소한 베이컨이 만나 풍부한 맛의 버거",
    price: 20,
  },  
  {
    id: "d7",
    name: "제로 스프라이트",
    description: "자연산 모짜렐라 치즈와 고소한 베이컨이 만나 풍부한 맛의 버거",
    price: 20,
  },  
  {
    id: "d8",
    name: "선데이 아이스크림",
    description: "자연산 모짜렐라 치즈와 고소한 베이컨이 만나 풍부한 맛의 버거",
    price: 28,
  },  
  {
    id: "d9",
    name: "컵 아이스크림",
    description: "자연산 모짜렐라 치즈와 고소한 베이컨이 만나 풍부한 맛의 버거",
    price: 15,
  },  

];
// console.log(DUMMY_MEALS[0].image);

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <DrinkItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <CardDrink>
        <ul>{mealsList}</ul>
      </CardDrink>
    </section>
  );
};
export default AvailableMeals;
