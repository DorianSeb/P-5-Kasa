import { useState } from "react";
import "../styles/_collapse.scss";
import arrowIcon from "../assets/arrow.svg"; 

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