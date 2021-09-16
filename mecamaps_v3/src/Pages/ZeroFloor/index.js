import React from 'react';
import { Div, Title, MainMenu, Floor, Map, Floor_img } from './styles';
import { Link } from 'react-router-dom';

import Floor0 from '../../Images/Inferior.png'

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
            <Link to="firstfloor">Primeiro Andar</Link>
        </Floor>
        <Map>
            <Floor_img src={Floor0} />
        </Map>
    </Div>
  );
}
