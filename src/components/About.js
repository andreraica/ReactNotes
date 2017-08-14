import React, { Component } from 'react';
import '../style/Notes.css';
import { Link } from 'react-router-dom'

class About extends Component {
  
  render() {
    return (
      <div>
        <p>
          Programa Simples de Notas para Exemplo
          <ul>
            <li><Link to='/'>Voltar Notas</Link></li>
          </ul>
        </p>        
      </div>
    );
  }
}

export default About;
