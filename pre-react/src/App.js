import React, {Component} from 'react';
/*import './App.css';*/
import ImgCard from './static/component/ImgCard/index'
import MenuItem from './static/component/MenuItem/index'
import HeaderTab from "./static/component/Header";
import MenuDate from "./static/component/MenuDate";



class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderTab/>
                <MenuDate/>
                <MenuItem/>
                <ImgCard/>
            </div>
        );
    }
}


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}*/

export default App;
