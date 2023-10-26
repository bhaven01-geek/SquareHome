// import { housesData } from './data';
// import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w74lio6',
        'template_o0zltno',
        form.current,
        'eSkjFyU40r8RbxXY0'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //   const { id } = useParams();
  //   const property = housesData.find((house) => {
  //     return house.id === parseInt(id);
  //   });

  const property = {
    id: 1,
    type: 'House',
    name: 'House1',
    description:
      "AX CAPITAL Real Estate is offering to the market a spacious 3-Bedroom + Maid in Bluewaters 6. Offering breathtaking views. , this fully furnished property boasts 3 bedrooms, 1 maid's room, and 5 bathrooms within its expansive 2,101.12 sqft. It also includes the convenience of 2 covered parking spaces. Property Highlights - 3 Bedrooms - Maid Room (With External Door). - 4 Bathrooms - L Shape Balcony with Ain Dubai and Full Sea View. - Corner Unit - Size: 2101.12 sqft. - High Floor - Luxury Fully Furnished. - Open Kitchen - 2 Parking Spaces - 1 or 2 cheques. - Reference number: axc[redacted phone number] - Agent: Dren Sefa - [redacted phone number] Alternatively, visit our website where you will find an extensive selection of properties available for sale and rent. Ask us about: - Off-Plan - Property Management - Interior Design (Ax Design) - Exclusive Off-Plan - Short Term Let",
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  };

  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="mt-5 text-3xl font-semibold">{property.name}</h2>
          <h3 className="text-lg mb-4">{property.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-orange-400 rounded-full text-white px-6 inline-block py-3">
            {property.type}
          </div>
          <div className="bg-orange-600 rounded-full text-white px-6 inline-block py-3">
            {property.country}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
              alt=""
            />
          </div>
          <div className="flex gap-x-8 text-orange-600 mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{property.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{property.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div className="text-lg font-medium">{property.surface}</div>
            </div>
            <div className="flex gap-x-2  text-3xl font-semibold text-orange-600">
              $ {property.price}
            </div>
          </div>
          <p style={{ textAlign: 'justify' }}>{property.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <img
              className="h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            ></img>
            <div>
              <div className="font-bold text-lg">{property.agent.name}</div>
              {/* <Link to="/Listings" className="text-violet-700 text-sm">
                View listings
              </Link> */}
            </div>
          </div>
          <form
            className="flex flex-col gap-y-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="border border-gray-300 focus:border-orange-600 text-gray-600 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Name*"
              name="from_name"
            />
            <input
              className="border border-gray-300 focus:border-orange-600 text-gray-600 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Email*"
              name="from_email"
            />
            <input
              className="border border-gray-300 focus:border-orange-600 text-gray-600 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Phone*"
              name="from_phone"
            />
            <textarea
              className="border border-gray-300 focus:border-orange-600 rounded w-full p-4 h-36 text-sm text-gray-600 outline-none resize-none"
              type="text"
              placeholder="Message*"
              name="message"
            />
            <div className="flex gap-x-2">
              <button
                className="bg-orange-600 hover:bg-orange-400 text-white rounded p-4 text-sm w-full transition text-center"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
