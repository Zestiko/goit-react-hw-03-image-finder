import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import css from './App.module.css';
import React, { Component } from 'react';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import axios from 'axios';
import photo from '../Photo/photo.jpg';
import { ThreeDots } from 'react-loader-spinner';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31396399-0c0a53b00e87586b8fc1cddd2';

export class App extends Component {
  state = {
    gallary: [],
    search: '',
    page: 1,
    isLoaderVisible: false,
    modalImage: '',
  };

  hendelShowModal() {
    this.setState({ modalImage: photo });
  }

  hendelCloseModal() {
    this.setState({ modalImage: '' });
  }
  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      console.log('State Change');
      this.handelFetch(search);
    }
  }
  hendelSerchSubmit = value => {
    this.setState({ search: value, page: 1, gallary: [] });
    console.log(this.state.search);
  };

  handelFetch = async serchValue => {
    const { page } = this.state;
    try {
      this.setState({ isLoaderVisible: true });
      const { data } = await axios.get(
        `${BASE_URL}?key=${API_KEY}&per_page=15&page=${page}&q=${serchValue}&image_type=photo&pretty=true`
      );
      this.setState(prevState => ({
        gallary: [...prevState.gallary, ...data.hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoaderVisible: false });
    }
  };

  handeLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { gallary, isLoaderVisible, modalImage } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmitHendler={this.hendelSerchSubmit} />
        <ImageGallery
          images={gallary}
          onImageClick={() => this.hendelShowModal()}
        />
        {gallary.length > 0 && (
          <>
            {!isLoaderVisible && (
              <Button onClick={() => this.handeLoadMore()} />
            )}
            <div className={css.loader}>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                margin="10"
                color="#3f51b5"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={isLoaderVisible}
              />
            </div>
          </>
        )}

        {modalImage > 0 && (
          <Modal closeModal={() => this.hendelCloseModal()}>
            <img src={photo} alt="123" />{' '}
          </Modal>
        )}
      </div>
    );
  }
}
