import { Component } from "react";
import "./portfolio.css";
// import IMG1 from "../../../public/images/amazon.png";
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
    tech:"react,Node,firebase,express,Vanilla CSS",
    github: "https://github.com/Soumya-9641/amazon-clone.git",
    demo: "https://inext.dev"
  },
  {
    id: 2,
    image: "/images/bookstore.jpeg",
    title: "Bookstore",
    about:"a bookstore app where you can purchase multiple types of book ,add to cart them etc ",
    tech:"Next.js,Node,express,mongodb,Razorpay payment,Tailwind CSS",
    github: "https://github.com/Soumya-9641/Bookstore_website.git",
    demo: "https://drive.google.com/file/d/1nkz4QHQJqFyt2DwbEGorYx8qpAhA4Rkc/view?usp=sharing"
  },

  {
    id: 3,
    image: "/images/donateking.jpeg",
    title: "DonateKing",
    about:"a donation app to donate your unused things like shirts,bags,shoes",
    tech:"react,Node,reactHooks,Razorpay,Mongodb,Tailwind CSS",
    github: "https://github.com/Soumya-9641/full_mernStack.git",
    demo: "https://drive.google.com/file/d/1OG7JNFeX0l2GS5hACkK0KsiNuZfWSOsC/view?usp=sharing"
  },
  {
    id: 4,
    image: "/images/video.jpeg",
    title: "Video Calling app",
    about:"A video calling app where two people enter same code and create a room for video calling",
    tech:"react,Node,redux,AgoraRTM",
    github: "https://github.com/Soumya-9641/videcall.git",
    demo: "https://videcall-soumya-9641.vercel.app/"
  },
  {
    id: 5,
    image: "/images/yechat.jpeg",
    title: "YeChat",
    about:"a firebase chat app where logged in people can talk to each other",
    tech:"react,Firebase,SCSS",
    github: "https://github.com/Soumya-9641/Firebase_chatapp.git",
    demo: "https://drive.google.com/file/d/1u0WSMjZPm2mh8s8jmcsMbgwK1R5ZY-x1/view?usp=sharing"
  },
  {
    id: 6,
    image: "/images/techoverflow.jpeg",
    title: "Techoverflow",
    about:"A nextjs app where developers can upload there blogs ,articles",
    tech:"NextJs,mongodb,Tailwind CSS",
    github: " https://github.com/Soumya-9641/techoverflow.git",
    demo: "https://drive.google.com/file/d/18uMb2n0k8aVDYFlvfTQrlB2mT2Z27bz2/view?usp=sharing"
  },
  {
    id: 7,
    image: "/images/graphql.jpeg",
    title: "graphql",
    about:"A MERN app using GRAPHQL where user can post ,delete any social media post using semantic ui component.",
    tech:"React,mongodb,semantic ui,NodeJS,Express,GraphQL",
    github: "https://github.com/Soumya-9641/Social-media-app-using-GraphQL",
    demo: "https://drive.google.com/file/d/1v1l5-IFo9Sb9wUGb94Mn3suZrCwZmUY4/view?usp=sharing"
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
                <h3 className="portfolio_tech">Tech Stack:  {tech}</h3>
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
