import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul>
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to="/movies">MOVIES</Link>
    </li>
  </ul>
);
export default Header;
