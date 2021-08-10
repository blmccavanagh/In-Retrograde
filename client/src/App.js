import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/home" component={Home}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
