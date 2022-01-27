import NavBar from './components/NavBar/NavBar';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Utilitys from './components/Utilitis/Utilitys';
import Sugar from './components/Utilitis/Sugar';
import Mash from './components/Utilitis/Mash';
import Rule from './components/Utilitis/Rule';

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
      </Switch>
  </>
  );
}

export default App;

