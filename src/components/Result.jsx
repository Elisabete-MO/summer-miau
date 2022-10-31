import React, { Component } from 'react'
import trofee from '../images/pngegg.png';
import '../styles/Result.css'

export class Result extends Component {
  render() {
    return (
      <div>
        <p>Miau! Você clicou 'x' vezes no gatinho!</p>
        <img className="trofee"src={ trofee } alt="trofee"/>
      </div>
    )
  };
};

export default Result;