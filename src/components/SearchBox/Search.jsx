// import React, { useContext } from 'react';
import PropertyDropdown from './PropertyDropDown';
import PriceRangeDropdown from './PriceDropDown';
import { useState } from 'react';

import { RiSearch2Line } from 'react-icons/ri';

const Search = ({setPropertyData}) => {
  //   const { handleClick } = useContext(HouseContext);

  const [ selectedPrice, setPrice ] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // const properties = ['Apartment', 'House', 'Land' ];

  const getFilterList = () => {
    // Define your backend API URL
    const apiUrl = `http://localhost:3000/api/listing/get/filterListing`; // Replace with your actual API URL

    // Create a query parameter string based on selectedPrice and selectedProperty
    const queryParams = [];
    if (selectedPrice) {
      queryParams.push(`priceRange=${selectedPrice}`);
    }
    if (selectedProperty) {
      queryParams.push(`propertyType=${selectedProperty}`);
    }

    // Join the query parameters with '&' and add them to the URL if there are any
    const queryParamString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    // Make a GET request to the API using fetch
    fetch(`${apiUrl}${queryParamString}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Handle the API response, e.g., update state with the filtered data
        setPropertyData(data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('API request failed:', error);
      });
  };

  return (
    <div className="px-[30px] py-6 max-w-[1170px] my-10 mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3  lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      {/* <CountryDropdown /> */}
      <PropertyDropdown selectedProperty={selectedProperty} setSelectedProperty={setSelectedProperty}/>
      <PriceRangeDropdown selectedPrice={selectedPrice} setPrice={setPrice} />
      <button
        onClick={getFilterList}
        className="bg-violet hover:bg-orange-700 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
