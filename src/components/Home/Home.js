import './style.css'
import { Link } from 'react-router-dom';

const Home = () => {
  
  return <div className='homeContainer'>
      <Link className='homeLink' to='/utilitys'>Utilidades</Link>
      <Link className='homeLink' to='/new'>Nueva Cocción</Link>
  </div>;
};

export default Home;
