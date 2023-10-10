import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png'

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Orlando</span> <br /> Interior Designer
        </span>
        <p className="introPara">I am a skilled architect and interior designer with experience in creating <br /> amazing concepts for structures</p>
      <Link>
      <button className="btn">
        <img className="btnImg" src={btnImg} alt="Request my services" /> Request my services
      </button>
      </Link>
      </div>
      <img className="bg" src={bg} alt="Profile" />
    </section>
  );
}

export default Intro;
