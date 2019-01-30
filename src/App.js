import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Headers from './components/Header/Header'
import Contents from './components/Content/Content'
import Footers from './components/Footer/Footer'


class App extends Component {
  render() {
    console.log('test')
    return (
      <div className="App" style={{display:'grid',gridTemplateRows:'48px 600px 48px'}}>       
        <Headers />
        <Contents />
        <Footers />
      </div>
    );
  }
}

export default App;
