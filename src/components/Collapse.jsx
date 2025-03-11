import { useState } from "react";
import "../styles/_collapse.scss"; // Assure-toi d'avoir bien le fichier SCSS
import arrowIcon from "../assets/arrow.svg"; // Remplace avec le bon chemin de ton icône

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`collapse ${isOpen ? "open" : ""}`}>
        <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
          <span>{title}</span>
          <img
            src={arrowIcon}
            alt="Flèche"
            className={isOpen ? "rotated" : ""}
          />
        </div>
        <div className="collapse-content">
          {content}
        </div>
      </div>
    );
  }
  
  export default Collapse;