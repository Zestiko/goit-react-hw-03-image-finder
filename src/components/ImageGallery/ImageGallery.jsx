import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
  };

  handelClick(e) {
    // console.log(e.target);
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  }
  render() {
    return (
      <>
        <ul className={css.gallery}>
          {this.props.images.map(({ webformatURL, id, tags, previewURL }) => {
            return (
              <>
                <ImageGalleryItem
                  smallImage={webformatURL}
                  key={id}
                  altPhotos={tags}
                  onClick={() => this.handelClick()}
                  onImageClick={this.props.onImageClick}
                />
              </>
            );
          })}
        </ul>
      </>
    );
  }
}
