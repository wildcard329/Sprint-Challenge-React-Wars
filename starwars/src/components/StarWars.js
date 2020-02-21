import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardMaker from './CardMaker';
import './StarWars.css';

export default function StarWars() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(res => {
            setData(res.data.results)
            console.log('flag',res);
        })
        .catch(err => {
            console.error('err',err);
        })
    }, [])
    return (
        <div>
            {data.map((card, index) => (
                <CardMaker key={index} card={card} />
            ))}
        </div>
    )
}