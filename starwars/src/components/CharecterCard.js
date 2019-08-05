import React from 'react';
import {} from 'semantic-ui-react';
import styled from 'styled-components'
const Card = styled.div`
background: white;
width: 26%;
margin: 20px;
border: 3px solid black;
border-radius: 10px;
`
function CharacterCard({char, hgt , skn}){

    return (
        <Card>
           <h1>{char}</h1>
           <p>height:{hgt}</p> 
           <p>Skin Color: {skn}</p>
        </Card>
    )
}
export default CharacterCard;