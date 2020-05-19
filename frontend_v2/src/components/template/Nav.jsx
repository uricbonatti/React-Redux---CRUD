import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <aside className='menu-area'>
    <nav className='menu'>
      {/* Refatorar para poder ampliar os menus */}
      <Link to='/'>
        <i className='fa fa-home' />
        {' Inicio'}
      </Link>
      <Link to='/users'>
        <i className='fa fa-users' />
        {' Usuarios'}
      </Link>
    </nav>
  </aside>
);
