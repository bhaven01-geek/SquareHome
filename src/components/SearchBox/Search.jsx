// import React, { useContext } from 'react';
import PropertyDropdown from './PropertyDropDown';
import PriceRangeDropdown from './PriceDropDown';

import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  //   const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] my-10 mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3  lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      {/* <CountryDropdown /> */}
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => {
          //   handleClick();
        }}
        className="bg-violet hover:bg-orange-700 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
