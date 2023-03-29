import { Component } from "react";
import CTA from "./CTA";
//import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I am</h5>
          <h1>Soumyadip Gantait</h1>
          <div className="text-light">A passionate Full Stack Software Developer 🚀.Learning Devops
          <br/>
           having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs
           <br/>
            and some other cool libraries and frameworks.</div>
          <CTA />
          <div className="me">
            <img src="/images/profile.png" alt="ME" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;
