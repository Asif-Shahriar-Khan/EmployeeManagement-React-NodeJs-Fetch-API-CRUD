import React from 'react';
import Employees from './Employees'
import Add from './Add';
import Edit from './Edit';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">

    
    
                 <Switch>
                     <Route exact path ="/" component={Employees} />
                     <Route exact path = "/add" component={Add} />
                     <Route exact path ="/edit" component={Edit}/>
                 </Switch>
     
      
     
    </div>
    </Router>
  );
}

export default App;
