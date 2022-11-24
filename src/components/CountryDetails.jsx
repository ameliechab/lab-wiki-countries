import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const displayedCountry = countries.filter((country) => {
    return country.alpha3Code.includes(id);
  });

  console.log(displayedCountry[0]);
  return (
    <div className="col-7">
      <h1>{displayedCountry[0].name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{displayedCountry[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {displayedCountry[0].area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {displayedCountry[0].borders.map((border) => {
                  return (
                    <li>
                      <Link to={`/${border}`}>
                        {
                          countries.filter((borderCountry) => {
                            return borderCountry.alpha3Code === border;
                          })[0].name.common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
