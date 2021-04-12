import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = () => (
  <div className={style.Header}>
    <ul className={style.HeaderNav}>
      <li>
        <NavLink
          exact
          to="/"
          className={style.Link}
          activeClassName={style.LinkActive}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/movies"
          className={style.Link}
          activeClassName={style.LinkActive}
        >
          MOVIES
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Header;
