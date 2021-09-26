/*import _ from 'lodash';
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import { places } from './places';

let ref = "Professores";

const placeOptions = _.map(places[ref], (place) => ({
  key: place.id,
  text: place.name,
  value: place.id,
}))

const DropdownSearchSelection = () => (
  <Dropdown placeholder='Place' search selection options={placeOptions} />
)

export default DropdownSearchSelection;

console.log(placeOptions.text);*/
/*import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const addressDefinitions = faker.definitions.address
console.log(addressDefinitions.state);
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))


const DropdownSearchSelection = () => (
        <Dropdown placeholder='State' search selection options={stateOptions} />
    );


export default DropdownSearchSelection;*/

import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

import { useFind, useOption } from "../../Context/options";

// normal usage
export default function Drops({ children }) {

    const { find, setFind } = useFind();
    const { option, setOption } = useOption();

    const stateOptions = {
        "Professores": ["Arturo", "Larissa"],
        "Lab": ["MT02","MT25"]
    };

    const findings =  ["Professores", "Lab", "Salas"];

    return (
    <>
        {children}
        <Dropdown
        placeholder={find}
        options={findings}
        e={find}
        onChange={(e) => {
            setFind(e.value)}}
        />
        <Dropdown
        placeholder={option}
        options={stateOptions[find]}
        e={option}
        onChange={(e) => setOption(e.value)}
        />
    </>
    );
};

