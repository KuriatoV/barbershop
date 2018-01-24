import React, { Component } from 'react';
import {Header,Main,Footer} from './components'


import './App.css';

class App extends Component {
  constructor(props){
  super(props)
this.state={

}
}
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
