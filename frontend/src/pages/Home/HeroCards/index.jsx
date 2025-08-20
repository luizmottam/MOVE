import CardCategory from "./CardCategory";
import { cardText } from "./herocard.config";

const HeroCard = () => {
  return (
    <section className="">
      <div className="grid grid-cols-4 justify-center items-center h-[550px] px-[var(--dp)] gap-10">
        {cardText.map((card, index) => {
          return (
            <CardCategory key={index} title={card.title} description={card.description} backgroundImg={card.backgroundImg} />
          );
        })}
      </div>
    </section>
  );
};

export default HeroCard;
