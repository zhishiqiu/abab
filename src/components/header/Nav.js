import React, { Component } from "react";

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

export default Nav;
