import "../styles/_banner.scss";
import defaultBannerImage from "../assets/banner-image.webp"; // Image par défaut

function Banner({ image = defaultBannerImage, text = "Chez vous, partout et ailleurs" }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-image" />
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

export default Banner;