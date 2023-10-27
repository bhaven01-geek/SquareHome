import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
// import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
//   const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const properties = [
      {
        value:'Apartment'
      },
      {
        value:'House'
      },
      {
        value:'Land'
      }
  ];
  return (
    <Menu as='div' className='dropdown '>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          {/* <div className='text-[15px] font-medium leading-tight'>
            {property}
            Hello
          </div> */}
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
            //   onClick={() => setProperty(value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {property.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;