import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card_view"> 
       <ul className="card_list">
         <li>
           <img src="#"/>
           <p>제목1</p>
           <a>예매율</a>
           <a>평점</a>
         </li>
         <li>
           <img src="#"/>
           <p>제목2</p>
           <a>예매율</a>
           <a>평점</a>
         </li>
         <li>
           <img src="#"/>
           <p>제목3</p>
           <a>예매율</a>
           <a>평점</a>
         </li>
         <li>
           <img src="#"/>
           <p>제목4</p>
           <a>예매율</a>
           <a>평점</a>
         </li>
         <li>
           <img src="#"/>
           <p>제목5</p>
           <a>예매율</a>
           <a>평점</a>
         </li>
       </ul>
      </div>
    );
  }
}

export default Card;
