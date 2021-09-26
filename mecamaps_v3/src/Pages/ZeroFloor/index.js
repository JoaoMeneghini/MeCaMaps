import React, { useState } from 'react';
import { Div, Title, MainMenu, Floor, Map, Floor_img, Button} from './styles';
import { Link } from 'react-router-dom';

import  Grafo from '../../Components/Djikstra/grafo';
import Drops from '../../Components/Dropdown/Dropdown';

//import Floor0 from '../../Images/Inferior.png';
import Floor0 from '../../Components/Paths/Planta_Terreo.jpg';
import Caminhos from '../../Components/Paths/caminhos';

export default props => {
    let b = new Grafo();
    const [toColor, setToColor] = useState([]);

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
            <div>
            <Drops></Drops>
            </div>
            <Map>
                <Caminhos color={toColor}/>
                <Floor_img src={Floor0} />
            </Map>
        </Div>
    );
}
