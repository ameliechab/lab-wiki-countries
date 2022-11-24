import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ country }) => {
  return (
    <div style={{ maxHeight: '90vh' }}>
      <div className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to={country.alpha3Code}
        >
          {country.name.common}
        </Link>
      </div>
    </div>
  );
};

export default CountriesList;
