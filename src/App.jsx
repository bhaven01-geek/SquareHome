import SignIn from './Auth/SignIn';
import PropertyDetails from './ListingDesc/HousePage';
import SignUp from './Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext/AuthContext';
import ListingItem from './components/ListingItem/ListingItem';
import CreateListing from './components/CreateListings/CreateListings';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import EmiCalc from './components/Home/EmiCalc';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Dashboard />
          <Routes>
            <Route exact path="/property" element={<PropertyDetails />} />
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/Listings" element={<ListingItem />} />
            <Route exact path="/create" element={<CreateListing />} />
            <Route exact path="/emi" element={<EmiCalc />} />
          </Routes>
          {/* <Footer /> */}
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
