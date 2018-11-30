import React, {Component} from 'react';

class Header extends Component{
  render(){
    console.log("header compo");
    return(
      <div>

        <nav>
          <div className="nav-wrapper teal lighten-2">
            <a href="#" className="brand-logo right">Data Viewer Utility</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="/kwh">Kwh</a></li>
                <li><a href="/bill">Bill</a></li>
                <li><a href="/savings">Savings</a></li>
            </ul>
          </div>
        </nav>

      </div>)
  }
}

export default Header;
