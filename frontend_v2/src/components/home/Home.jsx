import React from 'react';
import Main from '../template/Main';

export default (props) => (
  <Main
    icon='university'
    title='Inicio'
    subtitle='Projeto do capitulo de React'
  >
    <div className='display-4'>Bem-Vindo</div>
    <hr />
    <p className='mb-0'>
      Sistema para exemplificar a construção de um cadastro em react
    </p>
  </Main>
);
