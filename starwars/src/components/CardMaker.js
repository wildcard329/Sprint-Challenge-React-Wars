import React from 'react';
import {Card, CardTitle, CardSubtitle} from 'reactstrap';
import styled from 'styled-components';

export default function CardMaker({card}) {
    const CustomDiv = styled.div `
        background: grey;
        color: white;
        margin: 5%;
        width: 20%;
    `

    return (
        <CustomDiv>
            <Card>
                <CardTitle>Name: {card.name}</CardTitle>
                <CardSubtitle>Gender: {card.gender}</CardSubtitle>
                <CardSubtitle>Eye Color: {card.eye_color}</CardSubtitle>
                <CardSubtitle>Skin Color: {card.skin_color}</CardSubtitle>
                <CardSubtitle>Height: {card.height}</CardSubtitle>
                <CardSubtitle>Mass: {card.mass}</CardSubtitle>
            </Card>
        </CustomDiv>
    )
}