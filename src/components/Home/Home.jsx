import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "./About";
import Services from "./Services";
import bannerImg from "../../assets/images/house-banner.png";
import "./styles.css";
import Header from "../Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        {/* top */}
        <div className="flex flex-col lg:flex-row">
          <div class="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
            <h1 className="text-violet font-bold text-3xl lg:text-6xl">
              Find your <span className="text-black">Forever Home</span>
              with us
            </h1>
            <div className="text-gray-800 font-semibold mt-10 text-xs sm:text-sm">
              Square Home property portal is the best place to find your next
              perfect place to live.
              <br />
              We have a wide range of properties for you to choose from.
            </div>
            <Link to={"/Listings"}>
              <button className="text-xs sm:text-sm font-bold hover:underline bg-violet hover:bg-green-900 text-white py-2 px-4 mt-10 rounded ">
                Your New Home Awaits - Let's Begin!
              </button>{" "}
            </Link>
          </div>
          <div class="hidden flex-1 lg:flex mt-20 mr-10 justify-end items-end">
            <img src={bannerImg} alt="" />
          </div>
        </div>

        {/* about us */}

        <About />

        {/* our services */}

        <Services />

        <Footer />
      </div>
    </>
  );
}
