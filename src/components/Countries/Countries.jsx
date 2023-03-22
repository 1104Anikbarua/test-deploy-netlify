import React, { useEffect, useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import './countries.style.css'

const Countries = () => {
    const [countrys, setCountrys] = useState([]);
    // const [search, setSearch] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => setCountrys(data))
    }, [])
    // console.log(countrys)
    const handleSearch = (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        fetch(`https://restcountries.com/v3.1/name/${search}`)
            .then(res => res.json())
            .then(data => setCountrys(data))
        event.target.reset();
    }
    // const storage = countrys.map(country => country)
    // console.log(storage)
    return (
        <>
            <form onSubmit={handleSearch} className='input-text'>
                <input type="text" name="search" id="" />
                <button>Search</button>
            </form>
            <p className='text-xl font-semibold text-blue-700 text-center mt-5'>Total Countries Found {countrys.length}</p>
            <div className='country-parent'>

                {
                    countrys?.map((country, index) => <CountryDetails country={country} key={index} ></CountryDetails>)
                }
            </div>
        </>
    );
};

export default Countries;