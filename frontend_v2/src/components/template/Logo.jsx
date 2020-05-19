import './Logo.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

export default (props) => (
  <aside className='logo'>
    <Link to='/' className='logo'>
      <img src={logo} alt='logo' />
    </Link>
  </aside>
);
