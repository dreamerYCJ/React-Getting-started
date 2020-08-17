import React from 'react';
import './App.css';
import Comment from "./components/comment/Comment"
import ThemeButton from "./components/ThemeConText/ThemeButton"
import Header from "./components/Header"
import Time from "./components/Time"
function App() {
  return (
    <div className="App" >
      <div className="row">
        <div className="col-lg-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 offset-2">
          <Comment />
        </div>
        <div className="col-lg-3 offset-2">
          <Time />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-2">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default App;
