import react from "react";

import { NavLink } from "react-router-dom";
import image from "./images/emotion.png"
function Aboutus()
{
  return (
    <>
    <div className="py-xl-5 d-inline-block bg-light">
    <section id="header" className="d-flex align-items-center" >
    <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-10 mx-auto">
      <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
      <h1>About US</h1>
      <h4>Welcome to our Emotion Detection- Your Partner in Detecting the human mood!</h4>
      <p>What is Imentiv AI?
Are you looking to create emotionally appealing content? Look no further than Imentiv AI's advanced Emotion AI tool. Our machine-learning models analyze the emotions of actors in your videos, providing deep insights into the emotional impact of your content.

By understanding the emotions conveyed by your actors and story, you can anticipate how your audience will perceive your content. With Imentiv AI's Emotion AI solution, you can create emotionally appealing content that resonates with your viewers, capturing their hearts and minds.

Try Imentiv AI's Emotion AI tool today and unlock the emotional potential of your videos. Take your content to the next level with our Emotion AI solution.</p>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <img src={image} className="img=fluid animated" alt="home-img"/></div>
      </div>
      </div>
      </div>
      </div></section>
      </div>
    <div id="faq" >
      <section className="about"  >
      <div class="py-xl-5 d-inline-block bg-light">
      <h5 >who we are</h5>
      <p>At Emotion Insights, we are a dedicated team of technologists, psychologists, and innovators who are passionate about exploring the intricate world of human emotions. With a diverse background in AI development, behavioral science, and user experience design, our team collaborates to create cutting-edge solutions that bring the human touch to digital interactions.</p>
      <h5 >Our Vision</h5>
      <p>We envision a future where technology not only serves functional needs but also understands and responds to human emotions with empathy and insight. By developing state-of-the-art emotion detection systems, we aim to enhance communication, improve mental health support, and foster deeper connections in both personal and professional settings.</p>

      <h5>Our Team</h5>
    <p>
      Name:HealthCareHub<br></br>
      Address:<a href="https://www.akgec.ac.in/"> Ajay Kumar Garg Engineering College,Ghaziabad<br></br></a>
      Phone:12345<br></br>
      Email: <a href = "akansha.arora2001.com?">
      Email
      </a>
      </p>
      </div>
      </section>
      </div>
      </>
  );
}
export default Aboutus;