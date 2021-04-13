import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';
import routes from '../../routes/mainRoute';

const Header = () => (
  <div className={style.Header}>
    <ul className={style.HeaderNav}>
      <li>
        <NavLink
          exact
          to={routes.home}
          className={style.Link}
          activeClassName={style.LinkActive}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={routes.movies}
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
