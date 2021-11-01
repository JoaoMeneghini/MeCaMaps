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

/*import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

import { useHereC1, useHereC2, useWhereC1, useWhereC2 } from "../../Context/options";

// normal usage
export default function Drops({ children }) {

    const { hereC1, setHereC1 } = useHereC1();
    const { hereC2, setHereC2 } = useHereC2();
    const { whereC1, setWhereC1 } = useWhereC1();
    const { whereC2, setWhereC2 } = useWhereC2();

    const stateOptions = {
        "Professores": ["Arturo", "Larissa"],
        "Salas": ["MT02","MT25"]
    };

    const findings =  ["Professores", "Salas"];

    return (
    <>
        {children}
        <Dropdown
        placeholder={hereC1}
        options={findings}
        e={hereC1}
        onChange={(e) => {setHereC1(e.value)}}
        />
        <Dropdown
        placeholder={hereC2}
        options={stateOptions[hereC1]}
        e={hereC2}
        onChange={(e) => setHereC2(e.value)}
        />
        <Dropdown
        placeholder={whereC1}
        options={findings}
        e={whereC1}
        onChange={(e) => {setWhereC1(e.value)}}
        />
        <Dropdown
        placeholder={whereC2}
        options={stateOptions[whereC1]}
        e={whereC2}
        onChange={(e) => setWhereC2(e.value)}
        />
    </>
    );
};*/

/*import { useEffect } from 'react';*/
import Multiselect from 'multiselect-react-dropdown';

// normal usage
export default function Drops(props, { children }) {

    const state = {
        options: [
            {key: 'Arturo', cat:'Professores'},
            {key: 'Larissa', cat:'Professores'},
            {key: 'MT02', cat:'Salas'},
            {key: 'MT25', cat:'Salas'}
        ],
        selectedValues: [
            { key: props.actual, cat: "Group 1" },
            { key: props.where, cat: "Group 1" }
        ]
    };

    return (
    <>
        <Multiselect
        options={state.options}
        placeholder='Selecione...'
        groupBy="cat"
        displayValue="key"
        singleSelect={true}
        onSelect={(selectedItem) => {
            props.setPlace(selectedItem[0].key)
        }}
        />
    </>
    );
};
