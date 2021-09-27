import React from 'react';
import { CamImg, Div, CamButton, SubTitle, Title, Button } from './styles';
import cam from '../../Images/cam.png';
import { Link, useParams } from 'react-router-dom';

//import DropdownSearchSelection from '../../Components/Dropdown/Dropdown';
import Drops from '../../Components/Dropdown/Dropdown';

import { useHereC1, useWhereC1 } from "../../Context/options";

export default props => {

    const { actual } = useParams();

    const { hereC1, setHereC1 } = useHereC1();
    const { whereC1, setWhereC1 } = useWhereC1();

    return (
        <Div>
            <div>
                <Title>MeCaMaps</Title>
            </div>
            <div>
                <SubTitle>Se localize na Mecatrônica!</SubTitle>
            </div>
            <div>
                <Link to="/zerofloor"><Button>Visualizar Mapa</Button></Link>
            </div>
            <div>
                <CamButton>
                    <CamImg src={cam}/>
                </CamButton>
                <Button><Drops actual={actual} setPlace={setHereC1}></Drops></Button>
            </div>
            <div>
                <Button><Drops setPlace={setWhereC1}></Drops></Button>
            </div>
            <div>
                <Button disabled={(hereC1.length < 1) || (whereC1.length < 1)}>
                    <Link to="/zerofloor"><Button>Gerar Rota</Button></Link>
                </Button>
            </div>
        </Div>
    );
}
