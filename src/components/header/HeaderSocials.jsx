import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/soumyadip-gantait-04b602220/" target="#">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Soumya-9641" target="#">
          <FaGithub />
        </a>
        <a href="https://dribble.com" target="#">
          <FiDribbble />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
