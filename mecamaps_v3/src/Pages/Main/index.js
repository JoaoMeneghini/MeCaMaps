import React from 'react';
import { CamImg, Div, CamButton, SubTitle, Title, Button } from './styles';
import cam from '../../Images/cam.png';
import { Link } from 'react-router-dom';

//import DropdownSearchSelection from '../../Components/Dropdown/Dropdown';
import Drops from '../../Components/Dropdown/Dropdown';

export default props => {
  return (
    <Div>
        <div>
            <Title>MeCaMaps</Title>
        </div>
        <div>
            <SubTitle>Texto chamativo</SubTitle>
        </div>
        <div>
            <Link to="zerofloor"><Button>Visualizar Mapa</Button></Link>
        </div>
        <div>
            <CamButton>
                <CamImg src={cam}/>
            </CamButton>
            <Button>Selecione sua localização atual...</Button>
        </div>
        <div>
            <Button>Selecione seu destino...</Button>
        </div>
        <div>
            <Button disabled>Gerar rota</Button>
        </div>
        <div>
            <Drops></Drops>
        </div>
    </Div>
  );
}
