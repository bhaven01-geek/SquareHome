import { useRef, useState , useEffect} from 'react';
import Search from "../SearchBox/Search";
import "./listingItem.css";
import { useNavigate } from 'react-router-dom';

export default function ListingItem() {

  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {

    const apiUrl = "http://localhost:3000/api/listing/get"; 

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPropertyData(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  const GotoProperty = (property) => {
    navigate(`/property`, { state: { property } });
  }


  return (
    <div>
      <Search />
      <section className="property" id="property">
        <div className="container">
          <p className="section-subtitle">Properties</p>

          <h2 className="h2 section-title">Featured Listings</h2>


          <ul className="property-list">
      {propertyData.map((property, index) => (
        <li key={index}>
          <div className="property-card">
            <figure className="card-banner">
              <img src={property.imageUrls[0]} alt={index} className="w-100" />
              <div className={`card-badge ${property.status}`}>{property.status}</div>
            </figure>
            <div className="card-content">
              <div className="card-price">
                <strong>{property.price}</strong>
              </div>
            
              <h3 className="h3 card-title">
                <button onClick={() => GotoProperty(property)}>{property.name}
              </button>
              </h3>
              <p className="card-text">{property.description}</p>
              <ul className="card-list">
                <li className="card-item">
                  <strong>{property.bedrooms}</strong>
                  <ion-icon name="bed-outline"></ion-icon>
                  <span>Bedrooms</span>
                </li>
                <li className="card-item">
                      <strong>{property.bathrooms}</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>{property.squareFt}</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>

          <ul className="property-list">
            <li>
              <div className="property-card">
                <figure className="card-banner">
                  {/* <a href="/"> */}
                  <img
                    src="https://media.istockphoto.com/id/1421422160/photo/interior-of-living-room.jpg?s=612x612&w=is&k=20&c=f2P4MD78gZeAHzH4IIZb_Tw_6RprT6Yb6O9xp8iAX94="
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                  {/* </a> */}

                  <div className="card-badge green">For Rent</div>


                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="/">New Apartment Nice View</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>

                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  {/* <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src="./assets/images/author.jpg"
                        alt="William Seklo"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="/">William Seklo</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div> */}

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      <i class="fa-solid fa-heart"></i>
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>


                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="property-card">
                <figure className="card-banner">
                  {/* <a href="/"> */}
                  <img
                    src="https://media.istockphoto.com/id/1421422160/photo/interior-of-living-room.jpg?s=612x612&w=is&k=20&c=f2P4MD78gZeAHzH4IIZb_Tw_6RprT6Yb6O9xp8iAX94="
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                  {/* </a> */}

                  <div className="card-badge green">For Rent</div>


                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="/">New Apartment Nice View</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>

                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  {/* <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src="./assets/images/author.jpg"
                        alt="William Seklo"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="/">William Seklo</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div> */}

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      <i class="fa-solid fa-heart"></i>
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>


                  </div>
                </div>
              </div>
            </li>

            <li>


              <div className="property-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src="https://media.istockphoto.com/id/1197307802/photo/modern-living-room-with-library-and-books.jpg?s=2048x2048&w=is&k=20&c=1uw-swsidSu9QqgxGAlORXU4yl4agUH3viRqeeQq-hk="
                      alt="Modern Apartments"
                      className="w-100"
                    />
                  </a>

                  <div className="card-badge orange">For Sales</div>

                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="/">Modern Apartments</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src="./assets/images/author.jpg"
                        alt="William Seklo"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="/">William Seklo</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div>

                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src="https://media.istockphoto.com/id/1001130366/photo/modern-bright-skandinavian-interior-design-living-room.jpg?s=2048x2048&w=is&k=20&c=5kh_4noD6Q0XxmK2jLjQLPmScaUamtpPeBfDD5w3Gyo="
                      alt="Comfortable Apartment"
                      className="w-100"
                    />
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="/">Comfortable Apartment</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src="./assets/images/author.jpg"
                        alt="William Seklo"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="/">William Seklo</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div>

                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src="./assets/images/property-4.png"
                      alt="Luxury villa in Rego Park"
                      className="w-100"
                    />
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="/">Luxury villa in Rego Park</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src="./assets/images/author.jpg"
                        alt="William Seklo"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="/">William Seklo</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div>

                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}