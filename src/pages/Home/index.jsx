import { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import "../../styles/_home.scss";
import "../../styles/_card.scss";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json") // Charge le fichier JSON
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="cards-container">
        {logements.length > 0 ? (
          logements.map((logement) => (
            <Card key={logement.id} title={logement.title} cover={logement.cover} />
          ))
        ) : (
          <p>Chargement des logements...</p>
        )}
      </div>
    </div>
  );
}

export default Home;