import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Graph from './components/Graph';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="container">
          <BrowserRouter>
             <div>
               <Route path="/" component={Header} />
               <Route
                    path="/kwh"
                    render={(props) => <Graph {...props} metric="kwh"/>}
              />
              <Route
                   path="/bill"
                   render={(props) => <Graph {...props} metric="bill"/>}
             />
             <Route
                  path="/savings"
                  render={(props) => <Graph {...props} metric="savings"/>}
            />
          <Route path="/" component={Footer} />
             </div>

          </BrowserRouter>
      </div>
    );
  }
}

export default App;
