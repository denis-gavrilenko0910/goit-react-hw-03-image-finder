import PropTypes from 'prop-types';
import { ImageGalleryItems } from './ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="imageGallery">
      {images?.map(({ id, webformatURL, largeImageURL, tags }) => {
        console.log(id);
        return (
          <ImageGalleryItems
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
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
