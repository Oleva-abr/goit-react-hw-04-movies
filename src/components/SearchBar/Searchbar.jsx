import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({
      searchQuery: value,
    });
  };

  handeSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      toast.error('Try again!');
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <form className={style.form} onSubmit={this.handeSubmit}>
          <button className={style.serchButton} type="submit">
            <span>Search</span>
          </button>

          <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
