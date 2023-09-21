import CardDesrt from "../UI/CardDesrt";
import classes from "./AvailableMeals.module.css";
import DesertItem from "./MealItem/DesertItem";

// import food from './img/m1.png';



const DUMMY_MEALS = [
  {
    id: "ders1",
    name: "앵그리너겟킹 8조각",
    description: "두 장의 패티가 이루는 조화로운 맛에 든든함까지 추가된 더블 클래식치즈버거",
    price: 18,
  },
  {
    id: "ders2",
    name: "너겟킹 8조각",
    description: "Enriched with a thick steak patty!",
    price: 23,
  },
  {
    id: "ders3",
    name: "앵그리너겟킹",
    description: "Crispy on the outside and chewy on the inside, spicy taste with Cheongyang pepper",
    price: 22,
  },
  {
    id: "ders4",
    name: "너겟킹",
    description: "Chewy shrimp and sweet and sour chili in a crispy coconut coating",
    price: 21,
  },
  {
    id: "ders5",
    name: "21치즈스틱",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 24,
  },  
  {
    id: "ders6",
    name: "어니언링",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 20,
  },  
  {
    id: "ders7",
    name: "바삭킹",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 27,
  },  
  {
    id: "ders8",
    name: "바삭킹8조각 +소스",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 100,
  },  
  {
    id: "ders9",
    name: "크리미모짜볼",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 20,
  },  
  {
    id: "ders10",
    name: "코코넛슈림프+스위트칠리소스",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 35,
  },  
  {
    id: "ders11",
    name: "코울슬로",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 20,
  },  
  {
    id: "ders12",
    name: "사이드소스",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 5,
  },  
  {
    id: "ders13",
    name: "시즈닝",
    description: "Only the best potatoes in the world are carefully selected and crispy with the secret!",
    price: 5,
  },  
];
// console.log(DUMMY_MEALS[0].image);

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <DesertItem
      image={meal.image}
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <CardDesrt>
        <ul>{mealsList}</ul>
      </CardDesrt>
    </section>
  );
};
export default AvailableMeals;
