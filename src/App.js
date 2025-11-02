import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import HomePage from './component/HomePage';
import CityDetails from './component/CityDetails';
import Contact from './component/Contact';
import Login from './component/Login'; // If you have a login component
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from "./component/SignupPage";
import Footer from './component/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
         <Route path="/Home" element={<HomePage />} />
        <Route path="/city/:id" element={<CityDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;