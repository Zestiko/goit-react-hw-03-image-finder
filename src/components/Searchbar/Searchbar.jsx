import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class SearchBar extends Component {
  state = {};
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchform}>
          <button type="submit" className={css.searchFormButton}>
            <span span className={css.searchFormButtonLabel}>
              Search
            </span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
