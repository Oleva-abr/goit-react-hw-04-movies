import React, { Component } from 'react';

import * as API from '../../service/MovieApi';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    API.Reviews(this.props.location.state.id)
      .then(results => this.setState({ reviews: results }))
      .catch(error => console.log(error));
  }

  render() {
    const { reviews, error } = this.state;
    const isShowReviews = reviews.length > 0;
    return (
      <>
        {isShowReviews ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4> Author: {author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}
