import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// import food from './img/m1.png';



const DUMMY_MEALS = [
  {
    id: "m1",
    name: "스모키 바비큐 몬스터",
    description: "진~한 훈연향과 불맛의 끝판왕, 스모키바비큐!",
    price: 69,
  },
  {
    id: "m2",
    name: "스모키 바비큐 와퍼",
    description: "진~한 훈연향과 불맛의 끝판왕, 스모키바비큐!",
    price: 55,
  },
  {
    id: "m3",
    name: "스모키 바비큐 X",
    description: "진~한 훈연향과 불맛의 끝판왕, 스모키바비큐! 두툼한 스테이크 패티로 더욱 풍성하게!",
    price: 45,
  },
  {
    id: "m4",
    name: "치킨킹BLT",
    description: "스파이시한 통닭다리살 프리미엄 치킨버거에 베이컨, 양상추, 토마토를 더했다. 치킨킹 BLT!",
    price: 84,
  },
  {
    id: "m5",
    name: "치킨킹",
    description: "스파이시한 통닭다리살과 고소한 브리오쉬번이 만나 더 풍부해진 프리미엄 치킨버거. 치킨킹!",
    price: 74,
  },  
  {
    id: "m6",
    name: "BLT오믈렛킹모닝",
    description: "부드러운 더블오믈렛과 소프트번의 조합",
    price: 57,
  },
  {
    id: "m7",
    name: "오믈렛킹모닝",
    description: "부드러운 더블오믈렛과 소프트번의 조합",
    price: 97,
  },
];
// console.log(DUMMY_MEALS[0].image);

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
