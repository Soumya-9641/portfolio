import { Component } from "react";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBE2_XoSoFBPxsqKLItwHIJ82vxDwk1vZppZTyoXfSQH1Olae_rpm8AwXU5vOeIQz4vmg&usqp=CAU" alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years of learning programming</small>
              </article>
              {/* <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+ WorldWide</small>
              </article> */}
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>6+ big and small Completed Projects</small>
              </article>
            </div>
            <p>
            I am a Computer Scientist who is studying at HERITAGE INSTITUTE OF TECHNOLOGY ,KOLKATA.
            <br/>
             I am a highly skilled professional developer who loves to take on the challenges and then solve them.
             <br/>
            
             I worked on a portion of their website for their Trinidad and Tobago website.
             <br/>
              I also worked with Nastech Group of companies as a freelance web developer.
              <br/> 
              Nastech is a giant in IT and cabling sector in Middle Eastern countries. I have also worked with TechnoSpark on React and NextJS technologies.
              
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
