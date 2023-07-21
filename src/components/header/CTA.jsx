import { Component } from "react";

import myresume from "../../assets/myresume.pdf"
const CTA =()=> {
  const handleClick = () => {
    // using Java Script method to get PDF file
    fetch('myresume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'myresume.pdf';
            alink.click();
        })
    })
}
   
    return (
      <div className="cta">
        <button onClick={handleClick} className="btn" download>
          Download CV
        </button>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }


export default CTA;
