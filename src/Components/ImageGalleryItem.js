import PropTypes from 'prop-types';

export const ImageGalleryItems = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <li className="imageGalleryItem" key={id}>
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
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
