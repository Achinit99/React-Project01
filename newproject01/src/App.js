import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contac from './Pages/Contac';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/Contac">
            <Contac />
          </Route>

        </switch>
      </div>
    </Router>
  );
}

export default App;
