// import { housesData } from './data';
import { useParams, useLocation } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Carousel } from '@material-tailwind/react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const form = useRef();
  const location = useLocation();
  const { property } = location.state;
  console.log(property);
  // const [submissionStatus, setSubmissionStatus] = useState(null);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: '',
  });

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
          // setSubmissionStatus('success'); // Set success status
          setNotification({
            type: 'success',
            message: 'Message sent successfully!',
          });

          setTimeout(() => {
            setNotification(null); // Remove the notification after a delay
          }, 1000); // Adjust the time (in milliseconds) as needed

          setFormData({
            // Clear the form data
            from_name: '',
            from_email: '',
            from_phone: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          setNotification({
            type: 'error',
            message: 'Message sending failed. Please try again.',
          });

          setTimeout(() => {
            setNotification(null); // Remove the notification after a delay
          }, 1000); // Adjust the time (in milliseconds) as needed
        }
      );
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
            {property.propertyType}
          </div>
          <div className="bg-orange-600 rounded-full text-white px-6 inline-block py-3">
            {property.address}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8 h-[520px]">
            <Carousel className="rounded-xl">
              {property.imageUrls.map((imageUrl, index) => (
                <img
                  key={index} // Use a unique key for each image
                  src={imageUrl}
                  alt={`image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
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
              <div className="text-lg font-medium">{property.squareFt}</div>
            </div>
            <div className="flex gap-x-2  text-3xl font-semibold text-orange-600">
              $ {property.price}
            </div>
          </div>
          <p style={{ textAlign: 'justify' }}>{property.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            {/* <img
              className="h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            ></img> */}
            <div>
              <div className="font-bold text-lg">Contact Dealer</div>
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
              type="text"
              placeholder="To: "
              value={property.seller.email}
              name="to_name"
              hidden
            ></input>
            <input
              className="border border-gray-300 focus:border-orange-600 text-gray-600 rounded w-full px-4 h-14 text-sm outline-none"
              type="text" 
              placeholder="Name*"
              name="from_name"
              required
              autoComplete="off"
              value={formData.from_name}
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
            />
            <input
              className="border border-gray-300 focus:border-orange-600 text-gray-600 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Email*"
              name="from_email"
              required
              autoComplete="off"
              value={formData.from_email}
              onChange={(e) =>
                setFormData({ ...formData, from_email: e.target.value })
              }
            />
            <input
              className="border border-gray-300 focus:border-orange-600 text-gray-600 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Phone*"
              name="from_phone"
              required
              autoComplete="off"
              value={formData.from_phone}
              onChange={(e) =>
                setFormData({ ...formData, from_phone: e.target.value })
              }
            />
            <textarea
              className="border border-gray-300 focus:border-orange-600 rounded w-full p-4 h-36 text-sm text-gray-600 outline-none resize-none"
              type="text"
              placeholder="Message*"
              name="message"
              required
              autoComplete="off"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <div className="flex gap-x-2">
              <button
                className="bg-orange-600 hover:bg-orange-400 text-white rounded p-4 text-sm w-full transition text-center"
                type="submit"
              >
                Send Message
              </button>
            </div>
            {notification && (
              <div
                className={`notification ${
                  notification.type === 'success'
                    ? 'bg-green-600 text-white p-3 rounded-md text-center'
                    : 'bg-red-400 p-3 rounded-md text-center'
                }`}
              >
                {notification.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
