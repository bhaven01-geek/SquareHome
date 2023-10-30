import './App.css';
import SignIn from './Auth/SignIn';
import PropertyDetails from './ListingDesc/HousePage';
import SignUp from './Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext/AuthContext';
import ListingItem from './components/ListingItem/ListingItem';
import CreateListing from './components/CreateListings/CreateListings';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import ShowListings from './components/ShowListings/ShowListings';
import Header from './components/Header/Header';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home/Home';
import UpdateListing from './components/UpdateListings/UpdateListings';
import EmiCalc from './components/Home/EmiCalc';
import Amenties from './Amenties/Amenties';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property" element={<PropertyDetails />} />
            <Route path="/emi" element={<EmiCalc />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="Listings" element={<ListingItem />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/app" element={<Dashboard />}>
              <Route path="create" index element={<CreateListing />} />
              <Route path="edit" element={<UpdateListing />} />
              <Route path="show" element={<ShowListings />} />
            </Route>
              <Route path="/am" element={<Amenties />} />
            
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
