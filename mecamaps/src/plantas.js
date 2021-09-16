import React from 'react';
import Planta_Terreo from './Planta_Terreo.jpg';
import './App.css';
import { Caminhos } from './Caminhos';
import { Image, View, Container } from 'react';

export const Planta = () => {
  return (
      <div>
        <img src={Planta_Terreo} className='Planta_terreo'/>
      </div>
  );
}