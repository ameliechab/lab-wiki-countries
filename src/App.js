import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJson from './countries.json';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(' https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div style={{ overflow: 'scroll' }}>
            {countries.map((country) => {
              return (
                <CountriesList key={country.name.common} country={country} />
              );
            })}

            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
