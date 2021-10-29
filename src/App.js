import './App.css';
import React, { Component } from 'react';

import Nav from "./components/header/Nav";
import Name from "./components/header/Name";
import Card from "./components/body/Card";
import Theater from "./components/body/Theater";
import Event from "./components/body/Event";

class App extends Component {
  render() {
    return (
     <div>
       <header>
        <Name></Name>
        <Nav></Nav>
      </header>
      <body>
        <Card></Card>
        <Theater></Theater>
        <Event></Event>
      </body>
     </div>
    );
  }
}
export default App;
