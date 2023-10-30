import './Amenties.css';
import { IoIosArrowRoundForward , IoMdHome  , IoMdBasket , IoMdCar , IoIosClock} from 'react-icons/io';

const Amenties = ({ property }) => {
  // Assuming 'property' is the object containing the API data
console.log(property);
  // Create an array of amenity names you want to display
  const amenitiesToDisplay = ['Parking', 'Swimming Pool', 'Furnished' , 'Security', 'Medical Center', 'Library Area', 'King Size Beds', 'Smart Homes', 'Kid’s Playland'];

  // Filter the amenities based on whether they exist in the 'property.amenities' array
  const filteredAmenities = amenitiesToDisplay.filter(amenity => property[amenity]);

  return (
    <>
      <section className="features">
        <div className="container">
          <p className="section-subtitle text-orange-900 bg-gray-300">Amenities Offered</p>
          {/* <h2 className="h2 section-title">Building Amenities</h2> */}
          <ul className="features-list">
            {filteredAmenities.map(amenity => (
              <li key={amenity}>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    {/* <ion-icon name={getIconName(amenity)}></ion-icon> */}
                    {getIconName(amenity)}
                  </div>
                  <h3 className="card-title">{amenity}</h3>
                  <div className="card-btn">
                    {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                    <IoIosArrowRoundForward className="text-orange-500" />

                  </div>
                </a>
              </li>
            ))}
              <li>
              <a href="#" class="features-card">

                <div class="card-icon">
                  {/* <ion-icon name="home-outline"></ion-icon> */}
                  <IoMdHome />
                </div>

                <h3 class="card-title">Smart Homes</h3>

                <div class="card-btn">
                  <IoIosArrowRoundForward className="text-violet" />
                  {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                </div>

              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

// This function maps amenity names to their corresponding icon names
const getIconName = (amenity) => {
  switch (amenity) {
    case 'Parking':
      return <IoMdCar/>;
    case 'Swimming Pool':
      return 'water-outline';
    case 'Security':
      return <IoIosClock/>;
    case 'Furnished':
      return <IoMdBasket/>;
    case 'Library Area':
      return 'library-outline';
    case 'King Size Beds':
      return 'bed-outline';
    case 'Smart Homes':
      return 'home-outline';
    case "Kid’s Playland":
      return 'football-outline';
    default:
      return 'help-circle-outline'; // Use a default icon or handle other cases as needed
  }
};

export default Amenties;
