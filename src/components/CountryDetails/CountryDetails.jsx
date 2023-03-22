import React from 'react';
import './countryDetail.style.css'

const CountryDetails = (props) => {
    // console.log(props)
    const { name, flags, capital } = props.country;
    return (
        <div className='country-content'>
            <img src={flags.png} alt="" />
            <p>{name.common}</p>
            <p>capital:{capital ? capital[0] : ''}</p>
            <button className='country-content-btn'>Details</button>
        </div>
    );
};

export default CountryDetails;