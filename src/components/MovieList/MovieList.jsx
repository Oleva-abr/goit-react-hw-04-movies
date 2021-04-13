import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ films, location }) => {
  return (
    <>
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
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

export default withRouter(MoviesList);
