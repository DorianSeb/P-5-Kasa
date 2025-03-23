import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import "../../styles/_housing.scss";
import "../../styles/_header.scss";

function Housing() {
  let { id } = useParams(); 
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("/logements.json") 
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((item) => item.id === id);
        if (!foundLogement) {
          navigate("/404", { replace: true }); // Redirection si ID invalide
        } else {
        setLogement(foundLogement);
        }
      })
      .catch((error) => console.error("Erreur de chargement des logements :", error));
  }, [id]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="housing">
      <Slideshow pictures={logement.pictures} />
      <div className="housing-content">
        <div className="housing-info">
          <h1 className="housing-title">{logement.title}</h1>
          <p className="housing-location">{logement.location}</p>
          <div className="housing-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="housing-host">
          <div className="host-info">
            <p className="host-name">{logement.host.name}</p>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="housing-rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={index < logement.rating ? "star filled" : "star"}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="housing-details">
        <Collapse title="Description" content={<p>{logement.description}</p>} />
        <Collapse 
          title="Équipements" 
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Housing;