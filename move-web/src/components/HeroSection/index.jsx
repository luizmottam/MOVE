import "./HeroSection.css";
import HeroCard from "../HeroCard";

export default function HeroSection({ title, heroCards }) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="hero-cards">
        {heroCards.map(({ id, subtitle, text }) => (
          <HeroCard key={id} subtitle={subtitle} text={text} />
        ))}
      </div>
    </section>
  );
}
