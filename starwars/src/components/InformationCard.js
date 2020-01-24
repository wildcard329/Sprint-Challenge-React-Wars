import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";


function InformationCard(){
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(response => {
                console.log(response.data)
            setInfo(response.data.results);

                console.log(response.data.results)
             })
            .catch(error => {
                console.log(error)
            })
           
    }, []);
    return (
        
        <div>
            info.forEach(result => { 
            <CharacterCard
                    key={info.name}
                    title={info.name}
                
                    />
                })
        </div>
        
    )
}
export default InformationCard;