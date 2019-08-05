import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharecterCard from './CharecterCard'
import {} from 'semantic-ui-react'
import styled from 'styled-components'

const CardBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
function CharacterData(){
const [people, setPeople] = useState([]);
useEffect(()=>{
axios.get(`https://swapi.co/api/people/`)
.then((data)=>{
    console.log(data.data.results)
 setPeople(data.data.results);
})
.catch(err =>{
    console.log(err);
})
})
    return(
        <CardBox>
            {people.map(person =>{
    return <CharecterCard char={person.name} hgt={person.height}
    skn={person.skin_color} gnd={person.gender} hair={person.hair_color} year={person.birth_year}/>
})}
        </CardBox>
    )
}
export default CharacterData;
//setName(personData.name);
// setHeight(personData.height);
// setMass(personData);
// setHair(personData);
// setSkin(personData);
// setUrl(personData);