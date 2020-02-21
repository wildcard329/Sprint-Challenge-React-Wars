import React, { useState, useEffect } from 'react';
import CardMaker from './CardMaker';
import axios from 'axios';

export default function SearchForm() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(res => {
                const result =res.data.results.filter(item => {
                    return item.name.toLowerCase().includes(search.toLowerCase());
                })
                setData(result);
            })
            .catch(err => console.error('err',err));
    }, [search]);
    const handleChange = e => {
        setSearch(e.target.value);
    };
    return (
        <section className="search-form">
            <form>
                <input
                    type="text"
                    value={search}
                    id="query"
                    placeholder="search"
                    onChange={handleChange}
                />
            </form>
            {data.map((item, index) => (
                <CardMaker key={index} card={item} />
            ))}
        </section>
    )
}