import React, { useState } from "react";
import {
    Card, 
    CardText,
    CardTitle
} from "reactstrap";
import InformationCard from "./InformationCard";

const CharacterCard = (props) => {


    return (
        <Card style={{width: "20%", borderRadius: "10%", backgroundColor: "lightblue", shadow: "10%"}}>
            <CardTitle>{props.char.name}</CardTitle>
            <CardText>`Eye Color: {props.char.eye_color}`</CardText>
            <CardText>`Hair Color: {props.char.hair_color}`</CardText>
            <CardText>`Gender: {props.char.gender}`</CardText>
            <CardText>`Mass: {props.char.mass}`</CardText>
        </Card>
    )
}
export default CharacterCard;