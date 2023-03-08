import { Component } from "react";
import "./portfolio.css";
//import IMG1 from "../../../public/images/amazon.png";
// import IMG2 from "../../assets/portfolio2.jpg";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: "/images/amazon.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Soumya-9641/amazon-clone.git",
    demo: "https://inext.dev"
  },
  {
    id: 2,
    image: "/images/bookstore.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Soumya-9641/Bookstore_website.git",
    demo: "https://inext.dev"
  },

  {
    id: 3,
    image: "/images/todolist.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Soumya-9641/TO_DO-USING-REACTHOOKS.git",
    demo: "https://inext.dev"
  },
  {
    id: 4,
    image: "/images/redux.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Soumya-9641/To-do_using_Redux.git",
    demo: "https://inext.dev"
  },
  {
    id: 5,
    image: "/images/newsletter.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Soumya-9641/Signup_newletter.git",
    demo: "https://inext.dev"
  },
  {
    id: 6,
    image: "/images/mern stack.png",
    title: "CryptCurrency Dashboard & Financial Visualization",
    github: "https://github.com/Soumya-9641/full_mernStack.git",
    demo: "https://inext.dev"
  }
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="#">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="#">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
