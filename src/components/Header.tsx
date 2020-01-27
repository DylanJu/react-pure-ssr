import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/news">News</Link>
  </header>
);

export default Header;
