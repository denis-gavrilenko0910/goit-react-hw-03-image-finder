import PropTypes from 'prop-types';
import { ImageGalleryItems } from './ImageGalleryItem';
import { nanoid } from 'nanoid';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="imageGallery">
      {images?.map(image => {
        return (
          <ImageGalleryItems
            key={nanoid()}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
