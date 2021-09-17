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
import { useState } from 'react';

// normal usage
const Drops = () => {

    const [option, setOption] = useState('');
    const [find, setFind] = useState('');

    const stateOptions = {
        "Professores": ["Arturo", "Larissa"],
        "Lab": ["MT02","MT25"]
    };

    const findings =  ["Professores", "Lab", "Salas"];

    return (
    <>
        <Dropdown
        placeholder="Select an option"
        options={findings}
        e={find}
        onChange={(e) => {
            setFind(e.value);
            setOption('Select an option')}}
        />
        <Dropdown
        placeholder="Select an option"
        options={stateOptions[find]}
        e={option}
        onChange={(e) => setOption(e.value)}
        />
    </>
    );
};

export default Drops;

