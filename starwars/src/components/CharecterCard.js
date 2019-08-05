import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
background: #D5B564;
width: 26%;
margin: 20px;
border: 3px solid black;
border-radius: 10px;
`
function CharacterCard({char, hgt , skn, gnd, hair, year}){
if(!char) return(
    <h1>Loading Starwars Charecters! </h1>
) 
    return (
        <Card>
           <h1>{char}</h1>
           <p>Birth Year: {year}</p>
           <p>height: {hgt} cm</p> 
           <p>Skin Color: {skn}</p>
           <p>Gender: {gnd}</p>
           <p>Hair color: {hair}</p>
        </Card>
    )
}
export default CharacterCard;