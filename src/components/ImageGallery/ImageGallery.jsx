import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrap } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryWrap>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageGalleryWrap>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
