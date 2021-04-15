import React, { Component } from 'react';

import * as API from '../../service/MovieApi';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    API.Reviews(this.props.id)
      .then(results => this.setState({ reviews: results }))
      .catch(error => console.log(error));
  }

  render() {
    const { reviews } = this.state;
    const isShowReviews = reviews.length > 0;

    return (
      <>
        {isShowReviews ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
                <a href={review.url}>{review.url}</a>
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
