import myImage1 from '../../assets/images/about-banner-11.jpg';
import myImage2 from '../../assets/images/about-banner-2.jpg';
import { FaLeaf, FaHome, FaWineGlass, FaHeart } from 'react-icons/fa';
import './styles.css';

export default function About() {
  return (
    <div className="flex flex-row gap-6 p-28 px-3 max-w-6xl mx-auto my-10">
      <section className="about" id="about">
        <div className="container">
          <figure className="about-banner">
            <img src={myImage1} alt="House interior" />
            <img src={myImage2} alt="House interior" className="abs-img" />
          </figure>

          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">
              The Leading Real Estate Rental Marketplace.
            </h2>

            <p className="about-text">
              Over 40,000 people work for us in more than 70 countries all over
              the world.
            </p>

            <ul className="about-list">
              <li className="about-item">
                <div className="about-item-icon">
                  <FaHome className="text-blue-500" />
                </div>
                <p className="about-item-text">Smart Home Design</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <FaLeaf className="text-green-600" />
                </div>
                <p className="about-item-text">Beautiful Scene Around</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <FaWineGlass className="text-orange-500" />
                </div>
                <p className="about-item-text">Exceptional Lifestyle</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <FaHeart className="text-red-500" />
                </div>
                <p className="about-item-text">Complete 24/7 Security</p>
              </li>
            </ul>

            <p className="callout">
              &quot;Unlock the Door to Your Future Home.&quot;
            </p>

            <a href="#service" className="btn">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
