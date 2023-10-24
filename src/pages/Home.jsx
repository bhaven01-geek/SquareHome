import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import SwiperCore from 'swiper';
// import 'swiper/css/bundle';
// import ListingItem from '../components/ListingItem';
import myImage1 from "../assets/images/about-banner-1.png";
import myImage2 from "../assets/images/about-banner-2.jpg";
import service1 from "../assets/images/service-1.png";
import service2 from "../assets/images/service-3.png";

import "../styles.css";
import {
  FaLeaf,
  FaHome,
  FaWineGlass,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  // SwiperCore.use([Navigation]);
  // console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-orange-600 font-bold text-3xl lg:text-6xl">
          Find your <span className="text-orange-400">Forever Home</span>
          {/* <br /> */}
          with us
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Property portal is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link to={"/search"}>
          <button className="text-xs sm:text-sm font-bold hover:underline bg-orange-600 hover:bg-green-900 text-white py-2 px-4 rounded">
            Your New Home Awaits - Let's Begin!
          </button>{" "}
        </Link>
      </div>

      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}

      <div className="flex flex-row gap-6 p-28 px-3 max-w-6xl mx-auto my-10">
        <section className="about" id="about">
          <div className="container">
            <figure className="about-banner">
              <img src={myImage1} alt="House interior" />
              <img src={myImage2} alt="House interior" className="abs-img" />
            </figure>

            <div className="about-content">
              <p className="section-subtitle">About Us</p>
              <h2 className="h2 section-title">
                The Leading Real Estate Rental Marketplace.
              </h2>

              <p className="about-text">
                Over 40,000 people work for us in more than 70 countries all
                over the world.
              </p>

              <ul className="about-list">
                <li className="about-item">
                  <div className="about-item-icon">
                    <FaHome className="text-orange-500" />
                  </div>
                  <p className="about-item-text">Smart Home Design</p>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <FaLeaf className="text-green-600" />
                  </div>
                  <p className="about-item-text">Beautiful Scene Around</p>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <FaWineGlass className="text-orange-500" />
                  </div>
                  <p className="about-item-text">Exceptional Lifestyle</p>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <FaHeart className="text-red-500" />
                  </div>
                  <p className="about-item-text">Complete 24/7 Security</p>
                </li>
              </ul>

              <p className="callout">"Unlock the Door to Your Future Home."</p>

              <a href="#service" className="btn">
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* our services */}
      <section className="service" id="service">
        <div className="container">
          <p className="section-subtitle">Our Services</p>
          <h2 className="h2 section-title">Our Main Focus</h2>
          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={service1} alt="Service icon" />
                </div>
                <h3 className="h3 card-title">
                  <a href="#">Buy a home</a>
                </h3>
                <p className="card-text">
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a href="#" className="card-link">
                  <span>Find A Home</span>
                  <FaArrowRight />
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={service2} alt="Service icon" />
                </div>
                <h3 className="h3 card-title">
                  <a href="#">Sell a home</a>
                </h3>
                <p className="card-text">
                  With our expert guidance, your property can find its perfect
                  match. List your home with us and experience a seamless
                  selling process.
                </p>
                <a href="#" className="card-link">
                  <span>Sell A Home</span>
                  <FaArrowRight />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
