import './HeroCard.css';

export default function HeroCard({ subtitle, text }) {
  return (
    <div className="hero-card">
      <h3 className="hero-card-subtitle">{subtitle}</h3>
      <p className="hero-card-text">{text}</p>
    </div>
  );
}
