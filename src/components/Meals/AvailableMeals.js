import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "토마호크 스테이크 & 셰프 초이스 가니시",
    description:
      "시즌 스페셜로 제공되는 요크셔 푸딩과 매시드 포테이토 상큼한 크랜베리 소스, 스위티 드롭, 말돈 소금 등 다양한 셰프 초이스 가니시와 함께 즐기는 토마호크 스테이크",
    price: 43.99,
  },
  {
    id: "m2",
    name: "포터하우스 스테이크",
    description:
      "부드러운 안심과 풍미가 진한 등심을 함께 즐길 수 있는 ReactSteak의 프리미엄 스테이크",
    price: 36.99,
  },
  {
    id: "m3",
    name: "갈릭 립아이",
    description: "구운 마늘과 마늘칩이 어우러진 꽃등심 스테이크",
    price: 31.99,
  },
  {
    id: "m4",
    name: "시푸드 빠삐요뜨",
    description:
      "각종 해산물과 채소를 프리미엄 쿠킹 필름으로 조리해 재료 본연의 맛과 향을 즐길 수 있는 토마토 수프",
    price: 16.5,
  },
  {
    id: "m5",
    name: "투움바 스테이크 파스타",
    description:
      "부드러운 스테이크와 ReactSteak 최고의 투움바 소스로 맛을 낸 파스타",
    price: 23.99,
  },
  {
    id: "m6",
    name: "치킨 텐더 샐러드",
    description: "부드럽고 고소한 닭 안심 튀김을 올린 샐러드 ",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
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
