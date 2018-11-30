import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Graph from './components/Graph';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="container">
          <BrowserRouter>
             <div>
               <Route path="/" component={Header} />
               <Route exact path="/graph" component={Graph} />
             </div>

          </BrowserRouter>
      </div>
    );
  }
}

export default App;
