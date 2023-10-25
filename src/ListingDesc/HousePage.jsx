// import { housesData } from './data';
// import { useParams } from 'react-router-dom';
// import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// import { Link } from 'react-router-dom';

const PropertyDetails = () => {
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
          <h2 className="text-2xl font-semibold">hello</h2>
          <h3 className="text-lg mb-4">{property.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-green-500 rounded-full text-white px-3 inline-block">
            {property.type}
          </div>
          <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
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
          <div className="flex gap-x-8 text-violet-700 mb-6">
            <div className="flex gap-x-2 items-center">
              {/* <BiBed className='text-2xl' /> */}
              <div className="text-lg font-medium">{property.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              {/* <BiBath className='text-2xl' /> */}
              <div className="text-lg font-medium">{property.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              {/* <BiArea className='text-2xl' /> */}
              <div className="text-lg font-medium">{property.surface}</div>
            </div>
            <div className="flex gap-x-2  text-3xl font-semibold text-violet-600">
              $ {property.price}
            </div>
          </div>
          <p style={{ textAlign: 'justify' }}>{property.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"></img>
            </div>
            <div>
              <div className="font-bold text-lg">{property.agent.name}</div>
              {/* <Link to='' className='text-violet-700 text-sm'>
                View listings
              </Link> */}
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Name*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Email*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Phone*"
            />
            <textarea
              className="border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none"
              type="text"
              placeholder="Message*"
              defaultValue="Hello, I am interested in [Modern apartment]"
            />
            <div className="flex gap-x-2">
              <button
                className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                type="submit"
              >
                Send message
              </button>
              <button className="border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition">
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
