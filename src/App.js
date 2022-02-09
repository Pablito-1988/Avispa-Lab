import NavBar from './components/NavBar/NavBar';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Utilitys from './components/Utilitis/Utilitys';
import Sugar from './components/Utilitis/Sugar';
import Mash from './components/Utilitis/Mash';
import Rule from './components/Utilitis/Rule';
import New from './components/Recipe/New';
import Footer from './components/Footer/Footer';
import Hisotry from './components/Recipe/Hisotry';
import Recipe from './components/Recipe/Recipe';

function App() {
  return (
  <>
  <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/utilitys" component={Utilitys} />
        <Route path="/sugar" component={Sugar} />
        <Route path="/mash" component={Mash} />
        <Route path="/rule" component={Rule} />
        <Route path="/new" component={New} />
        <Route path="/history" component={Hisotry} />
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
      <Footer />
  </>
  );
}

export default App;

