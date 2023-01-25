import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>
          {/* <img src={modalImage} alt={altPhotos} /> */}
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
