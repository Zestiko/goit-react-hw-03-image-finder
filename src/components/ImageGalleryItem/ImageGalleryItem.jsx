import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImg}
        src="https://pixabay.com/get/gec53449af2a3201deae5f62b2e7003f14f043eaf967582c9f051b7457470e864337cb49fc596d5840452d4a101760b6e3f0d9d5fb093f11cdfb107fa180489a7_640.jpg"
        alt=""
      />
    </li>
  );
};
