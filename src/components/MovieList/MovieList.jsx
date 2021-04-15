import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './movieList.module.css';

const MoviesList = ({ films, location }) => {
  return (
    <>
      <ul className={style.list}>
        {films.map(({ id, title }) => (
          <li className={style.listEl} key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,

                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propType = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }),
  ),
};

export default MoviesList;
