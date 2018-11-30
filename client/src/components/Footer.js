import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div>

        <footer className="page-footer teal lighten-2">
            <div className="container teal lighten-2">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Data Viewer Utility</h5>
                  <p className="grey-text text-lighten-4">Great tool, you should use it!</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="https://solstice.us">Solstice</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://github.com/yassine56">Me</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2018 copyright Abouelouafa Yassine
              <a className="grey-text text-lighten-4 right" href="https://abouelouafayassine.me">Me again</a>
              </div>
            </div>
        </footer>


      </div>)
  }
}

export default Footer;
