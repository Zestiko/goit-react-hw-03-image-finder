import css from './Modal.module.css';
export const Modal = ({ modalImage, altPhotos }) => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={modalImage} alt={altPhotos} />
      </div>
    </div>
  );
};
