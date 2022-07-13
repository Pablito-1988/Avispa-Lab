import { Link } from "react-router-dom";

const Utilitys = () => {
  return (
    <div>
      <div className="utilityContainer">
        <h1 className="sugarTitle">Utilidades</h1>
        <div className="linkContainer">
          <Link className="utilityLink" to="/sugar">
            <i className="fas fa-balance-scale"></i> Azucar
          </Link>
          <Link className="utilityLink" to="/mash">
            <i className="fas fa-tint"></i> Agua para mash
          </Link>
        </div>
        <Link className="utilityLink" to="/rule">
          <i className="fas fa-ruler-vertical"></i> Regla
        </Link>
      </div>
    </div>
  );
};

export default Utilitys;
