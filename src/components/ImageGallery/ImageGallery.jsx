import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  
  return (
    <>
      <ul className={css.gallery}>
        {images.map(({ webformatURL, id }) => {
          return (<ImageGalleryItem smallImage={webformatURL} key={id} />) ;
        })}
      </ul>
    </>
  );
};
