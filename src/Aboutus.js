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
      <p>What is FER?
<p> Facial Emotion Recognition (FER) is the technology that analyses facial expressions from both static images and videos in order to reveal information on one's emotional state.
How Emotion Recognition work ?

Our experiences often consist of multiple emotions at once, which, in addition, come in many different degrees, intensities, and qualities. Therefore, the emotion recognition software within our FaceAnalysis package shows the probability distribution of each of the basic emotions: happiness, sadness, anger, fear, surprise, and disgust, as well as neutral.
</p>
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
      Email: <a href = "riya.singh.com?">
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
