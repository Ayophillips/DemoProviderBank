import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from './Nav';
import OpenAccount from './components/openAccount';
import Balance from './components/balance';
import Statement from './components/statement';
import Collect from './components/collect';


export const Home = () => {
  return (
    <div>
      
    </div>
  )
}


function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/openaccount" component={OpenAccount} />
          <Route path="/balance" component={Balance} />
          <Route path="/statement" component={Statement} />
          <Route path="/collect" component={Collect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
