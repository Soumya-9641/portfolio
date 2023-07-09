import { Component } from "react";
import MyResume from "../../assets/MyResume.pdf";
class CTA extends Component {
  render() {
    return (
      <div className="cta">
        <a className="btn" href={MyResume} download>
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
