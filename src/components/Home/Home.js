import './style.css'
import functions from '../../functions/Math';
import { Link } from 'react-router-dom';

const Home = () => {
  console.log (functions.sugar(10, 2));
  return <div>
      <Link to='/utilitys'>Utilidades</Link>
      <Link to='/new'>Nueva receta</Link>

  </div>;
};

export default Home;
