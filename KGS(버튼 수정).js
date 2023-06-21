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
          <button className="head_login k">LOG IN</button>
          <button className="head_search k">SEARCH</button>
          <button className="head_about k">ABOUT</button>
        </div>
      </header>
      <div className="body">
        <div className="body_left">
          <div className="body_KGS">KGS</div>
          <div className="body_ktgs">
            Kisugsa tabang<br></br>Geumji System
          </div>
          <div className="body_letter">기숙사 타방 금지 시스템</div>
        </div>
        <div className="l"><button className="body_login">LOG IN</button></div>
        <img className="body_back" src="img/main_back.png"></img>
        <img className="body_lock" src="img/main_lock.png"></img>
        <div className="body_shadow"></div>
      </div>
    </>
  );
}

export default App;
