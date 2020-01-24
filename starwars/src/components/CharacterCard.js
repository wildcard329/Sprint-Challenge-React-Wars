import React, { useState } from "react";
import {
    Card, 
    CardText,
    CardTitle
} from "reactstrap";
import InformationCard from "./InformationCard";

const CharacterCard = (props) => {


    return (
        <Card>
            <CardTitle>{props.char.name}</CardTitle>
            <CardText>{props.char.eye_color}</CardText>
            <CardText>{props.char.hair_color}</CardText>
            <CardText>{props.char.gender}</CardText>
            <CardText>{props.char.mass}</CardText>
        </Card>
    )
}
export default CharacterCard;