import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <i class="fa-solid fa-building-user"></i>
                <b>Square Home</b>
              </a>

              <p className="section-text">
                Square Home is the best place to find your next perfect place to
                live. We have a wide range of properties for you to choose from.
              </p>
            </div>

            <div className="footer-link-box">
              <ul className="footer-list">
                <li className="logo">
                  <p>
                    <b>Services</b>
                  </p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Buy Property
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Sell Property
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    EMI Calculator
                  </a>
                </li>
              </ul>
              <div className="footer-list">
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <i className="topIcon fa-brands fa-square-facebook"></i>
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                      <i className="topIcon fa-brands fa-square-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                      <i className="topIcon fa-brands fa-square-pinterest"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                      <i className="topIcon fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <br />
                <ul className="contact-list">
                  <li>
                    <a href="#" className="contact-link">
                      <ion-icon name="location-outline"></ion-icon>

                      <address>West Malad, Mumbai, India</address>
                    </a>
                  </li>

                  <li>
                    <a href="tel:+0123456789" className="contact-link">
                      <ion-icon name="call-outline"></ion-icon>

                      <span>+0123-456789</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:contact@homeverse.com"
                      className="contact-link"
                    >
                      <ion-icon name="mail-outline"></ion-icon>

                      <span>contact@squarehome.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2023 <a href="#">Square Home</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
