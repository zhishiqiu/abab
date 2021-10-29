import React, { Component } from "react";

class Nav extends Component{
    render() {
      return (
        <nav>
          <ul className="Nav_bar">
            <li className="Nav"><a href="#">영화</a>
              <ul className="Sub_bar">
                <li className="Sub"><a href="#">전체 영화</a></li>
                <li className="Sub"><a href="#">etc</a></li>
              </ul>
            </li>
            <li className="Nav"><a href="#">예매</a>
            <ul className="Sub_bar">
                <li className="Sub"><a href="#">시간대 별</a></li>
                <li className="Sub"><a href="#">상영관 별</a></li>
              </ul></li>
            <li className="Nav"><a href="#">상영관</a>
            <ul className="Sub_bar">
                <li className="Sub"><a href="#">전체</a></li>
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
