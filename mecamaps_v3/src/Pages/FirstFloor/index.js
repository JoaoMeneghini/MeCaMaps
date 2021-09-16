import React from 'react';
import { Div, Title, MainMenu, Floor, Map, Floor_img } from './styles';
import { Link } from 'react-router-dom';

import Floor1 from '../../Images/Superior.png'

export default props => {
  return (
    <Div>
        <div>
            <Title>MeCaMaps</Title>
        </div>
        <MainMenu>
            <Link to="/">Menu Principal</Link>
        </MainMenu>
        <Floor>
            <Link to="zerofloor">Térreo</Link>
        </Floor>
        <Map>
            <Floor_img src={Floor1} />
        </Map>
    </Div>
  )
};
