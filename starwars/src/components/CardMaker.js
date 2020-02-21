import React from 'react';

export default function CardMaker({card}) {
    return (
        <div>
            <h1>{card.name}</h1>
            <p>{card.gender}</p>
        </div>
    )
}