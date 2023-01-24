import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ smallImage, altPhotos, onClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css['ImageGalleryItem-image']}
        src={smallImage}
        alt={altPhotos}
        onClick={onClick}
      />
    </li>
  );
};
