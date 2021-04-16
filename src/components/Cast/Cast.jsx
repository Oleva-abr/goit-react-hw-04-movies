import React, { Component } from 'react';
import * as API from '../../service/MovieApi';
import style from './cast.module.css';
export default class Cast extends Component {
  state = {
    actorsList: [],
  };

  componentDidMount() {
    const { location } = this.props;
    API.Cast(location.state?.id)
      .then(cast => this.setState({ actorsList: cast }))
      .catch(error => console.log(error));
    console.log(this.props);
  }

  render() {
    const { actorsList } = this.state;
    const isShowCast = actorsList.length > 0;

    return (
      <>
        {isShowCast && (
          <ul className={style.castlist}>
            {actorsList.map(actor => (
              <li className={style.castItem} key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `http://image.tmdb.org/t/p/w200/${actor.profile_path}`
                      : `http://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-article.png`
                  }
                  alt={`Actor: ${actor.name}`}
                  width="270"
                />
                <h3>{actor.name}</h3>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
