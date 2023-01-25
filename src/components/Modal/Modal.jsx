import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.hendelClosemodalByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelClosemodalByEscape);
  }

  hendelClosemodalByEscape = (e) => {
    console.log('escape')
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  }


  render() {
    return createPortal(
      <div
        className={css.Overlay}
        onClick={e => {
          if (e.target === e.currentTarget) {
            this.props.closeModal();
          }
        }}
      >
        <div className={css.Modal}>
          <img src={this.props.modalImage} alt={this.props.altPhotos} />
          {/* {this.props.children} */}
        </div>
      </div>,
      modalRoot
    );
  }
}
