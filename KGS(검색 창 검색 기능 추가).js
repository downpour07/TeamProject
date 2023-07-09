import React, { useState, useEffect } from "react";
import "./search.css";

function App() {
  const [search, setSearch] = useState("");

  const SEARCH = () => {
    window.location.reload();
  };

  const Change = (input) => {
    setSearch(input.target.value);
    // console.log(input.target.value);
  };

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      //Enter키를 눌렀을 때 동작할 코드
    }
  };

  return (
    <>
      <div className="background">
        <header>
          <div className="head_left">
            <img
              onClick={SEARCH}
              className="head_LOGO"
              src="img/LOGO.png"
            ></img>
          </div>
          <div className="head_right">
            <button className="head_home k">HOME</button>
            <button className="head_login k">LOG OUT</button>
            <button onClick={SEARCH} className="head_search">
              SEARCH
            </button>
            <button className="head_about k">ABOUT</button>
          </div>
        </header>
        <div className="body">
          <img className="circle1" src="img/circle1.png"></img>
          <img className="circle2" src="img/circle1.png"></img>
          <img className="circle3" src="img/circle2.png"></img>
          <img className="circle4" src="img/circle2.png"></img>
          <img className="circle5" src="img/circle3.png"></img>
          <img className="circle6" src="img/circle4.png"></img>
          <img className="circle7" src="img/circle3.png"></img>
          <div className="search_input">
            <img className="search_logo" src="img/LOGO_K.png"></img>
            <input
              value={search}
              onChange={Change}
              className="search_input_text"
              onKeyDown={onSubmitSearch}
              type={"search"}
              name="q"
              autoFocus
              placeholder="XXX호"
            ></input>
            <img className="search_img" src="img/search.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
