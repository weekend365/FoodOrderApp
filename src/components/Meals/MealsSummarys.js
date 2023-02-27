import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>최고의 스테이크, 당신에게로</h2>
      <p>
        ReactSteak는 딜리버리 서비스 론칭 1년만에 딜리버리 전용 매장을 포함한
        60여개의 매장에서 운영되고 있습니다.
      </p>
      <p>
        ReactSteak 셰프가 직접 만든 요리를 이제 집에서도 편안하게 즐길 수
        있습니다.
      </p>
    </section>
  );
};
export default MealsSummary;
