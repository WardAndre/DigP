import React from 'react';
import './App.css';
import Home from './components/Home/home';
import { Switch, Route } from 'react-router-dom'
import Fruit from './components/Fruit/fruit';


function App(props) {
  return (
    <div className="App">
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/details/:name" component={Fruit}/>
      </Switch>
    </div>
  );
}

export default App;
