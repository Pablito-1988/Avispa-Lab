import { Link } from "react-router-dom";


const Utilitys = () => {
  return <div>
      <div className="utilityContainer">
      <h2 className="sugarTitle">Utilidades</h2>
        <Link className="utilityLink" to='/sugar'><i className="fas fa-balance-scale"></i> Azucar</Link>
        <Link className="utilityLink" to='/mash'><i className="fas fa-tint"></i> Agua para mash</Link>
        <Link className="utilityLink" to='/rule'><i className="fas fa-ruler-vertical"></i> Regla</Link>

      </div>
  </div>;
};

export default Utilitys;
