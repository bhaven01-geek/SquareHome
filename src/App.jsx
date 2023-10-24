import './App.css';
import SignIn from './Auth/SignIn';
import PropertyDetails from './ListingDesc/HousePage';
import SignUp from './Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {lazy} from "react";
import { AuthProvider } from './AuthContext/AuthContext';
import Footer from './components/Footer/Footer';
import ListingItem from './components/ListingItem/ListingItem';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import CreateListing from './components/CreateListings/CreateListings';

function App(){

return(
  <>
  <BrowserRouter>
  <AuthProvider>
  <Header />
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path = '/property' element={<PropertyDetails/>}/>
    <Route exact path = '/login' element={<SignIn/>}/>
    <Route exact path = '/signup' element={<SignUp/>}/>
    {/* <Route exact path = '/footer' element={<Footer/>} /> */}
    <Route exact path = '/Listings' element= {<ListingItem/>} />
    <Route exact path = '/create' element= {<CreateListing/>} />
  </Routes>
  </AuthProvider>
  </BrowserRouter>
  </>
)

}

export default App;
