import react from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start bg-light text-muted"
        id="footer"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" id="cda"></i>Face Detection
                </h6>
                <p>
                Face Detection website is used to dete the human emotion or mood which can be used to identify the feeling of the person
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Emotion Detection
                  </a>
                </p>
                <p>
                  <a href="/Book" className="text-reset">
                    survey
                  </a>
                </p>
                
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="https://medcab.in/?gclid=Cj0KCQjwhfipBhCqARIsAH9msbneD4f50bj_YtgupU-auNc8pVCEYpJCwcskm7zWdcMxzmM9iGyqwpsaAg07EALw_wcB"
                    className="text-reset"
                  >
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="/Opd" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Home Page
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>
                  <a href="https://www.akgec.ac.in/" className="text-dark">
                    Ajay Kumar Garg Engineering College
                  </a>
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  FaceDetection123@.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
