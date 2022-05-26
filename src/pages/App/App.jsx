import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
// import CityCard from "../../components/CityCard/CityCard";
import ProfilePage from '../ProfilePage/ProfilePage';
import WeatherGallery from "../../components/WeatherGallery/WeatherGallery";
import FeedPage from "../FeedPage/FeedPage"

// let mockdata = [
//   {name: 'Bakersfield', temperature: '72'},
//   {name: 'seattle', temperature: '60'},
//   {name: 'Wasco', temperature: '80'},
//   {name: 'Shafter', temperature: '90'}
// ]

// let City = mockdata.map((city) => 
//   <WeatherGallery name = {city.name} temperature = {city.temperature} />
//   )

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  const [weather, setWeather] = useState([])

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  // useEffect(() => {
  //   fetch('http://api.weatherapi.com/v1/current.json?key=3cd832ab4bee40b7a8e225226222305&q=London')
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //     setWeather(result)
  //     })
  // }, [])

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<FeedPage user={user} handleLogout={handleLogout}/>} />
        
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout}  />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
