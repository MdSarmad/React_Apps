import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from './components/Counter';
import DisplayName from './components/DisplayName';

function App(){
  
  return(
    <Router>
      <Switch>
        <Route exact path = '/' component = {Counter}/>
        <Route exact path = '/display-name' component={DisplayName}/>
      </Switch>
    </Router>
  )

}




export default App;
