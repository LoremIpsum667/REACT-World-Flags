import React from 'react';
// affiche img et info des pays
const Card = ({country}) => {
    return (
      <li className='card'>
          <img src={country.flags.svg} alt={'flag ' + country.name.common}/>
          <div className='infos'>
            <h2>{country.name.common}</h2>
            <h4>{country.capital}</h4>
            <p>Pop. {country.population.toLocaleString()}</p>
          </div>
      </li>
    );
};

export default Card;

