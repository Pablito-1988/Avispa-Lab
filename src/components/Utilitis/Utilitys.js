import { Link } from "react-router-dom";


const Utilitys = () => {
  return <div>
      <div className="utilityContainer">
      <h2 className="sugarTitle">Utilidades</h2>
        <Link className="utilityLink" to='/sugar'>Azucar</Link>
        <Link className="utilityLink" to='/mash'>Agua para mash</Link>
        <Link className="utilityLink" to='/rule'>Reglas</Link>

      </div>
  </div>;
};

export default Utilitys;
