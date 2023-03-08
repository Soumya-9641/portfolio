import { Component } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          {/* <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article> */}
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Convert graphic designs to usable web images using React JS.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Code websites using HTML, CSS, JavaScript and  languages.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>create mongodb database and restAPI.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>exploring docker containerization and microservices.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Can create website design using tools like tailwind,bootstrap,sass.</p>
              </li>
             
            </ul>
          </article>
          {/* <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article> */}
        </div>
      </section>
    );
  }
}

export default Services;
