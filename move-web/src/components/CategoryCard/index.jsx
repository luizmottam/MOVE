import "./CategoryCard.css";

export default function CategoryCard(props) {
  return (
    <div className="category-card">
      <div
        className="category-image"
        style={{ backgroundImage: `url(${props.image})`, backgroundColor: props.color }}
      >
        <div className="category-overlay">
          <h3 className="category-title">{props.title}</h3>
          <p className="category-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
