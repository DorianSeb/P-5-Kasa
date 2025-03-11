import { useParams } from "react-router-dom";

function Housing() {
  let { id } = useParams(); // Récupère l'ID dans l'URL

  return (
    <div>
      <h1>Logement {id}</h1>
      <p>Informations sur le logement sélectionné.</p>
    </div>
  );
}

export default Housing;