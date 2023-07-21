
const CTA =()=> {
//   const handleClick = () => {
//     // using Java Script method to get PDF file
//     fetch('/assets/myresume.pdf').then(response => {
//         response.blob().then(blob => {
//             // Creating new object of PDF file
//             const fileURL = window.URL.createObjectURL(blob);
//             // Setting various property values
//             let alink = document.createElement('a');
//             alink.href = fileURL;
//             alink.download = 'myresume.pdf';
//             alink.click();
//         })
//     })
// }
   
    return (
      <div className="cta">
        {/* <button onClick={handleClick} className="btn" download>
          Download CV
        </button> */}
        <a href="https://drive.google.com/file/d/1Uf3xzqXSgdjJmS4CJEbKwJwbMiX4jvA2/view?usp=sharing" target="__blank" className="btn" download>
          Download CV
        </a>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }


export default CTA;
