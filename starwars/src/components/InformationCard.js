import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";


function InformationCard(){
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(response => {
                console.log('aaaaaaa',response)
            setInfo(response.data.results);

                console.log(response.data.results)
             })
            .catch(error => {
                console.log(error)
            })
           
    }, []);
    return (
        
        <>
        </>
        
    )
}
export default InformationCard;