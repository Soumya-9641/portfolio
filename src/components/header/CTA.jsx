import { Component } from "react";
import myresume from "../../assets/myresume.pdf";
class CTA extends Component {
  render() {
    return (
      <div className="cta">
        <a className="btn" href={myresume} download>
          Download CV
        </a>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }
}

export default CTA;
