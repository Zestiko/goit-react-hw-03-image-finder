import { Component } from 'react';
import css from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component  {
  state = {
    bigImg: '',
  }

  
  render() {
    const {smallImage, altPhotos ,onClick} = this.props
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={smallImage}
          alt={altPhotos}
          onClick={e => {
            onClick(e.target.src);
          }}
        />
      </li>
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

