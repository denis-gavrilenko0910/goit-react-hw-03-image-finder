import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ImageGalleryItems = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <li className="imageGalleryItem" key={nanoid()}>
      <img
        src={webformatURL}
        alt={tags}
        className="imageGalleryItem_image"
        onClick={() => onClick({ largeImageURL, tags })}
      />
    </li>
  );
};
ImageGalleryItems.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
