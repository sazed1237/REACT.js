import React from 'react';
import './Country.css'


const Country = (props) => {
// console.log(props.country)
    const {area, population, name, capital, flags} = props.country;
    return (
        <div className='country bg-light'>
            <h3>Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <h5>Capital: {capital}</h5>
            <p>Area: {area}</p>
            <p><small>Population: {population}</small></p>

        </div>
    );
};

export default Country;