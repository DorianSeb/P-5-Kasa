import { Link } from "react-router-dom";
import "../styles/_card.scss";

function Card({ id, title, cover }) {
  return (
    <div className="card">
      <Link to={`/housing/${id}`} className="card-link">
        <img src={cover} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
      </Link>
    </div>
  );
}

export default Card;