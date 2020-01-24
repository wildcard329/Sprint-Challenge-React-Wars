import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";
import axios from "axios";


function InformationCard(){
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(response => {
                console.log('flag',response.data)
            setInfo(response.data.results);

                console.log(response.data.results)
                console.log(info)
             })
            .catch(error => {
                console.log(error)
            })
           
    }, []);
    return (
    <div>
        <Container>
            <Row>
                {info.map(char => {
                    return (
                      <CharacterCard
                        char={char}
                        key={char.id}
                    />  
                    )
                    
                })}
            </Row>
        </Container>
    </div>

        
    )
}
export default InformationCard;