import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Import du logo

function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} alt="Kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;