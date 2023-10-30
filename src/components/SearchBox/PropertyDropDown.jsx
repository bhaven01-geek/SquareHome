import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
// import { HouseContext } from './HouseContext';

const PropertyDropdown = ({selectedProperty , setSelectedProperty}) => {
  // const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  

  const properties = ['Apartment', 'House', 'Land' ];

  const handleItemClick = (property) => {
    // Update the state with the selected property
    setSelectedProperty(property);
  };

  return (
    <Menu as='div' className='dropdown '>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight text-orange-800'>
            {selectedProperty}
          </div>
          <div className='text-[13px]'>Choose property type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
      {properties.map((property, index) => {
        return (
          <Menu.Item
            as='li'
            onClick={() => handleItemClick(property)}
            key={index}
            value={selectedProperty}
            className={`cursor-pointer hover:text-violet-700 transition ${
              selectedProperty === property ? 'text-violet-700' : ''
            }`}
          >
            {property}
          </Menu.Item>
        );
      })}
    </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;