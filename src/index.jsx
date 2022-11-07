import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import pro from "./p.jpg"

function Profile() {
    return(
        <img
            src = {pro}
            alt = "Profile-Img"
            className="profile"
        />
    )
}
function Intro() {
    return(<div className="intro">
          <div className="name">Gautam Sethi</div>
          <div className="job">Front-End Devloper</div>
          <div className="email">gautam2sethi@gmail.com</div>
    </div>)
}
function Content(){
    return(<div className="content">
      <div className="about">About</div>
      <div className="abt">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </div>
      <div className="about">Interests</div>
      <div className="abt">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </div>
    </div>)
}
function Btns() {
    return (
      <div className="btn">
        <button className="mail">
          <i className="fas fa-envelope"> </i> Email
        </button>
        <button className="link">
          <i className="fab fa-linkedin"> </i> LinkedIn
        </button>
      </div>
    );
}
function Footer() {
    return (
      <div className="foot">
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-github-square"></i>
      </div>
    );
}
function Main() {
    return (
      <div className="main">
        <Intro/>
        <Btns/>
        <Content/>
      </div>
    );
}

function Card() {
    return(
        <>
        <Profile/>
        <Main/>
        <Footer/>
        </>
    )
}
ReactDOM.render(<Card/>,document.querySelector("#root"));