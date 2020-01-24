import React, { useState } from "react";
import {
    Card, 
    CardText,
    CardTitle
} from "reactstrap";
import InformationCard from "./InformationCard";

const CharacterCard = ({ info }) => {


    return (
        <Card>
            <CardTitle>{info.name}</CardTitle>
            <CardText>{info.height}</CardText>
            <CardText>{info.mass}</CardText>
            <CardText>{info.hair_color}</CardText>
            <CardText>{info.skin_color}</CardText>
        </Card>
    )
}
export default CharacterCard;