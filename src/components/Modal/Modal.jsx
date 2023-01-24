import css from './Modal.module.css';
export const Modal = () => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img
          src="https://pixabay.com/get/gafb76b5b89876eb9fc9fbdfcb3082eb75c0d255b8e9181096617212146fcc9c4f8cfeb343c7e4f803004d2c6fad650a31b113c7758a260de11ddd2ec73fd4e9e_640.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
