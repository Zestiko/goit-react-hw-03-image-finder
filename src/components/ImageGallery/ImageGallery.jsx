import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    lagImage: '',
  };

  handelClick = img => {
    console.log('imagegallery запись в стейт имг');
    this.setState({ lagImage: img });
    // this.props.onImageClick(this.state.lagImage);
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.lagImage !== prevState.lagImage 
    ) {
      this.props.onImageClick(this.state.lagImage);
    }
  }
  render() {
    return (
      <>
        <ul className={css.gallery}>
          {this.props.images.map(({ webformatURL, id, tags, previewURL }) => {
            return (
              <ImageGalleryItem
                smallImage={webformatURL}
                key={id}
                altPhotos={tags}
                onClick={this.handelClick}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
