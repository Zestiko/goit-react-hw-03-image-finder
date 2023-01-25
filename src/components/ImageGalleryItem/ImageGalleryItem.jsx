import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';


export class ImageGalleryItem extends Component {
  state = {
    modalIsOpnet: false,
  };

  hendelShowModal = value => {
    console.log('hendelShowModal');
    this.setState({ modalImage: value });
  };

  hendelCloseModal = () => {
    this.setState(prevState => ({ modalIsOpnet: !prevState.modalIsOpnet }));
  };
  render() {
    const { smallImage, altPhotos, onClick, lagImage } = this.props;
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            className={css['ImageGalleryItem-image']}
            src={smallImage}
            alt={altPhotos}
            onClick={this.hendelCloseModal}
          />
        </li>
        {this.state.modalIsOpnet && (
          <Modal modalImage={lagImage} closeModal={this.hendelCloseModal} />
        )}
      </>
    );
  }
};



// export const ImageGalleryItem = ({ smallImage, altPhotos, onClick }) => {
//   return (
//     <li className={css.ImageGalleryItem}>
//       <img
//         className={css['ImageGalleryItem-image']}
//         src={smallImage}
//         alt={altPhotos}
//         onClick={e => {
//           onClick(e.target.src);
//         }}
//       />
//     </li>
//   );
// };

