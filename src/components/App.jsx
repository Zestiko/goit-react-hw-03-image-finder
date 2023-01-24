import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import css from './App.module.css';
import React, { Component } from 'react';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import axios from 'axios';

export class App extends Component {
  state = {
    gallary: [],
    search: '',
  };


  componentDidUpdate(_, prevState) {
    const { search } = this.state
    if (search !== prevState.search) {
      console.log('State Change')
      this.handelFetch(search);
    }
  }
  hendelSerchSubmit = value => {
    this.setState({ search: value });
    console.log(this.state.search);
  };

  handelFetch = async (serchValue) => {
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=31396399-0c0a53b00e87586b8fc1cddd2&per_page=15&page=1&q=${serchValue}&image_type=photo&pretty=true`
      );
      this.setState({ gallary: data.hits });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { gallary } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmitHendler={this.hendelSerchSubmit} />
        <ImageGallery images={gallary} />
        {gallary.length > 0 && <Button />}
        {/* <Modal/> */}
      </div>
    );
  }
}
