import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
// import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
//   const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const properties = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '20000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
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
        {properties.map((value, index) => {
          return (
            <Menu.Item
              as='li'
            //   onClick={() => setProperty(value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {properties.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;