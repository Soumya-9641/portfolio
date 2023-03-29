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
    image: "/images/amazon.jpeg",
    title: "Amazon Clone",
    about:"amazon clone with some types of product like tshirt,shirt with authentication features using firebase",
    tech:"react,Node,firebase,express",
    github: "https://github.com/Soumya-9641/amazon-clone.git",
    demo: "https://inext.dev"
  },
  {
    id: 2,
    image: "/images/bookstore.jpeg",
    title: "Bookstore",
    about:"a bookstore app where you can purchase multiple types of book ,add to cart them etc ",
    tech:"Next.js,Node,express,mongodb,paytm payment",
    github: "https://github.com/Soumya-9641/Bookstore_website.git",
    demo: "https://inext.dev"
  },

  {
    id: 3,
    image: "/images/todo.jpeg",
    title: "To-do list",
    about:"a todo list to add important work and delete as wish",
    tech:"react,Node,reactHooks",
    github: "https://github.com/Soumya-9641/TO_DO-USING-REACTHOOKS.git",
    demo: "https://inext.dev"
  },
  {
    id: 4,
    image: "/images/videocall.jpeg",
    title: "To-do list using redux",
    about:"a todo list to add important work and delete as wish",
    tech:"react,Node,redux",
    github: "https://github.com/Soumya-9641/To-do_using_Redux.git",
    demo: "https://inext.dev"
  },
  {
    id: 5,
    image: "/images/yechat.jpeg",
    title: "YeChat",
    about:"a todo list to add important work and delete as wish",
    tech:"react,Node,express",
    github: "https://github.com/Soumya-9641/Firebase_chatapp.git",
    demo: "https://inext.dev"
  },
  {
    id: 6,
    image: "/images/mern.jpeg",
    title: "Weather App",
    about:"a todo list to add important work and delete as wish",
    tech:"react,Node,mongodb,express",
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
          {data.map(({ id, image, title, github,about,tech, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3 className="portfolio_title">{title}</h3>
                <h5 className="portfolio_about">{about}</h5>
                <h5 className="portfolio_tech">Tech Stack:  {tech}</h5>
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
