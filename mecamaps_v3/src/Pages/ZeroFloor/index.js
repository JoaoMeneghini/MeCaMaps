import React, { useState, useEffect } from 'react';
import { Div, Title, MainMenu, Floor, Map, Floor_img, Button, CamImg, CamButton} from './styles';
import { Link, useParams } from 'react-router-dom';

import  Grafo from '../../Components/Djikstra/grafo';
import Drops from '../../Components/Dropdown/Dropdown';

//import Floor0 from '../../Images/Inferior.png';
import Floor0 from '../../Components/Paths/Planta_Terreo.jpg';
import Caminhos from '../../Components/Paths/caminhos';
import cam from '../../Images/cam.png';

import { useHereC1, useWhereC1, useColor } from "../../Context/options";
import  { correlations } from '../../Components/Paths/correlations';

export default props => {
    let b = new Grafo();
    const { toColor, setToColor } = useColor();
    const { hereC1, setHereC1 } = useHereC1();
    const { whereC1, setWhereC1 } = useWhereC1();
    const { actual } = useParams();

    useEffect(() => {
        if (actual) {
            setHereC1(actual);
        }
    },[])

    useEffect(() => {
        if (hereC1 !== '' && whereC1 !== '') {
            let init = correlations[hereC1];
            let end = correlations[whereC1];
            let values = b.AchaMenorCaminho(init,end);
            setToColor(values[1]);
            let d1 = values[0];
        };

    },[hereC1,whereC1])

    console.log(hereC1);

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
                <Drops type={0} actual={hereC1} setPlace={setHereC1}></Drops>
            </div>
            <div>
                <Drops type={1} where={whereC1} setPlace={setWhereC1}></Drops>
            </div>
            <div>
                <Link to="zerofloor/qrcode"><CamButton>
                    <CamImg src={cam}/>
                </CamButton></Link>
            </div>
            <Map>
                <Caminhos color={toColor} />
                <Floor_img src={Floor0} />
            </Map>
        </Div>
    );
}
