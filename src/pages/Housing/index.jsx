import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../../components/Slideshow"; // Import du composant

function Housing() {
  let { id } = useParams(); // Récupère l'ID de l'URL
  const [logement, setLogement] = useState(null); // Stocke les données du logement

  useEffect(() => {
    fetch("/logements.json") // Charge le fichier JSON
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((item) => item.id === id);
        setLogement(foundLogement);
      })
      .catch((error) => console.error("Erreur de chargement des logements :", error));
  }, [id]);

  if (!logement) {
    return <p>Chargement...</p>; // Affiche un message en attendant le chargement
  }

  return (
    <div>
      {logement ? (
        <>
          <Slideshow pictures={logement.pictures} /> {/* Slideshow ici */}
          <h1>{logement.title}</h1>
          <p>{logement.description}</p>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default Housing;