import './Footer.css';
import React from 'react';

export default (params) => (
  <footer className='footer'>
    <span>
      {'Desenvolvido com '}
      <i className='fa fa-heart text-danger' />
      {' por '}
      <strong>
        Cod
        <span className='text-danger'>3</span>
      </strong>
      r
    </span>
  </footer>
);
