import React, { useState, useEffect, useContext } from 'react';
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
// import { HouseContext } from './HouseContext';

const PriceRangeDropdown = ({selectedPrice , setPrice}) => {
  // const [ selectedPrice, setPrice ] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: 'Any Price' },
    { value: '1 - 500' },
    { value: '501 - 4999' },
    { value: '5000 - 9999' },
    { value: '10000 - 19999' },
    { value: '2000+' },
  ];
  
  const handleItemClick = (priceRange) => {
    // Update the state with the selected property
    setPrice(priceRange);
  };

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight text-orange-800'>{selectedPrice}</div>
          <div className='text-[13px]'>Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => {handleItemClick(price.value)}}
              key={index}
              value={selectedPrice}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;