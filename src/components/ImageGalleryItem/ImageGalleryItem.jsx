import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({smallImage}) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css["ImageGalleryItem-image"]} src={smallImage} alt="" />
    </li>
  );
};
