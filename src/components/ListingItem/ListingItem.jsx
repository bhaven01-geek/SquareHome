import { useRef, useState, useEffect } from 'react';
import Search from "../SearchBox/Search";
import "./listingItem.css";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

export default function ListingItem() {

  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page

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

  console.log(propertyData);
  const GotoProperty = (property) => {
    navigate(`/property`, { state: { property } });
  }

  const truncateDescription = (description, maxChars) => {
    if (description.length > maxChars) {
      return description.slice(0, maxChars) + '...';
    }
    return description;
  };

  const totalPages = Math.ceil(propertyData.length / itemsPerPage);

  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPropertyData = propertyData.slice(indexOfFirstItem, indexOfLastItem);


  const changePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Header />
      <div>
        <Search />
        <section className="property" id="property">
          <div className="container">
            <p className="section-subtitle">Properties</p>

            <h2 className="h2 section-title">Featured Listings</h2>


            <ul className="property-list">
              {currentPropertyData.length === 0 ? (
                <p>No listings to show.</p>
              ) : (
                currentPropertyData.map((property, index) => (
                  <li key={index}>
                    <div className="property-card">
                      <figure className="card-banner">
                        <img src={property.imageUrls[0]} alt={index} className="w-100" />
                        <div className={`card-badge ${property.status}`}>{property.status}</div>
                      </figure>
                      <div className="card-content">
                        <div className="card-price">
                          <strong>${property.price}</strong>
                        </div>

                        <h3 className="h3 card-title">
                          <button onClick={() => GotoProperty(property)}>{property.name}
                          </button>
                        </h3>
                        <p className="card-text">{truncateDescription(property.description, 10)}</p>
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

                      <div className="card-footer">

                        <div className="card-footer-actions">


                          <button className="card-footer-actions-btn">
                            <i class="fa-solid fa-heart"></i>
                            {/* <ion-icon name="heart-outline"></ion-icon> */}
                          </button>


                        </div>
                      </ div>
                    </div>
                  </li>
                )))}
            </ul>

            <div className="pagination flex justify-center mt-8">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mr-2 p-4 rounded-full ${currentPage === 1 ? "bg-gray-300" : "bg-violet text-white"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => changePage(index + 1)}
                  className={`mr-2 p-4 rounded-full ${currentPage === index + 1 ? "bg-violet text-white" : "bg-gray-300"}`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={indexOfLastItem >= propertyData.length}
                className={`ml-2 p-4 rounded-full ${currentPage === totalPages ? "bg-gray-300" : "bg-violet text-white"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>

  );
}