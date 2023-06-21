import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="head_left">
          <img className="head_LOGO" src="img/LOGO.png"></img>
        </div>
        <div className="head_right">
          <button className="head_home">HOME</button>
          <button className="head_login k">LOG OUT</button>
          <button className="head_search k">SEARCH</button>
          <button className="head_about k">ABOUT</button>
        </div>
      </header>
      <div className="body">
        <div className="body_left">
          <img className="body_left_alram" src="img/main_alram.png"></img>
          <img className="body_left_circle1" src="img/circle1.png"></img>
          <img className="body_left_circle2" src="img/circle1.png"></img>
          <img className="body_left_circle3" src="img/circle2.png"></img>
          <img className="body_left_circle4" src="img/circle2.png"></img>
          <img className="body_left_circle5" src="img/circle2.png"></img>
          <img className="body_left_circle6" src="img/circle3.png"></img>
          <img className="body_left_circle7" src="img/circle3.png"></img>
          <img className="body_left_shape" src="img/shape.png"></img>
        </div>
        <div className="body_right">
          <div className="body_right_font">안녕하세요 선생님!</div>
        </div>
      </div>
    </>
  );
}

export default App;
