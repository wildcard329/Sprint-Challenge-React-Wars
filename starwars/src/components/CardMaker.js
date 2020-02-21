import React from 'react';
import styled from 'styled-components';

export default function CardMaker({card}) {

    const CustomDiv = styled.div `
        background: grey;
        color: white;
        margin: 5%;
        width: 10%;
        border-radius: 20%;
    `

    return (
        <CustomDiv>
            <div>
                <h1>Name: {card.name}</h1>
                <p>Gender: {card.gender}</p>
                <p>Eye Color: {card.eye_color}</p>
                <p>Skin Color: {card.skin_color}</p>
                <p>Height: {card.height}</p>
                <p>Mass: {card.mass}</p>
            </div>
        </CustomDiv>
    )
}