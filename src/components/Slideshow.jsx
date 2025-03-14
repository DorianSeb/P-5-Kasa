import { useState } from "react";
import "../styles/_slideshow.scss";
import arrowLeft from "/src/assets/arrow-left.svg";
import arrowRight from "/src/assets/arrow-right.svg";

function Slideshow({ pictures }) {

    const [currentIndex, setCurrentIndex] = useState(0);
  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <button onClick={goToPrev} className="prev-button">
          <img src={arrowLeft} alt="Flèche gauche" />
        </button>
      )}

      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {pictures.length > 1 && (
        <button onClick={goToNext} className="next-button">
          <img src={arrowRight} alt="Flèche droite" />
        </button>
      )}

      {pictures.length > 1 && (
        <p className="slide-number">{currentIndex + 1}/{pictures.length}</p>
      )}
    </div>
  );
}

export default Slideshow;