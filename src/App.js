import './App.css';
import { render } from '@testing-library/react';
import React, { Component } from 'react';


class Name extends Component{
  render() {
    return (
     <h1 className="Name">911 CINEMA</h1>
    );
  }
}

class Nav extends Component{
  render() {
    return (
      <nav>
        <ul className="Nav_bar">
          <li className="Nav"><a href="#">영화</a>
            <ul className="Sub_bar">
              <li className="Sub"><a href="#">영화차트</a></li>
              <li className="Sub"><a href="#">뭐...등등등</a></li>
            </ul>
          </li>
          <li className="Nav"><a href="#">예매</a>
          <ul className="Sub_bar">
              <li className="Sub"><a href="#">시간표</a></li>
              <li className="Sub"><a href="#">상영관</a></li>
            </ul></li>
          <li className="Nav"><a href="#">극장</a>
          <ul className="Sub_bar">
              <li className="Sub"><a href="#">극장</a></li>
              <li className="Sub"><a href="#">특별관</a></li>
            </ul></li> 
          <li className="Nav"><a href="#">이벤트</a>
          <ul className="Sub_bar">
              <li className="Sub"><a href="#">이벤트</a></li>
              <li className="Sub"><a href="#">기프트샵</a></li>
            </ul></li> 
          </ul>
      </nav>
    );
  }
}

class Card extends Component{
  render() {
    return (
      <body>
        <ul className="Card_list">
         <li className="Card_name">영화1
          <li>
           <img></img>
          </li>
          <li className="Movie_name">영화이름</li>
          <li className="Movie_Country">국가</li>
           <li className="Grad">예매율 | 평점</li>
         </li>
       </ul>
     </body>
    );
  }
}

class App extends Component {
  render() {
    return (
     <div>
       <header>
        <Name></Name>
        <Nav></Nav>
      </header>
      <body className="Main">
        <Card></Card>
      </body>
     </div>
    );
  }
}

export default App;
