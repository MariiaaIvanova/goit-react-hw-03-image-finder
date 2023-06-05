import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import  ImageGalleryItem  from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, handleImageClick  }) => {

    return (
      <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onClick={() => handleImageClick(largeImageURL)}
        />
      ))}
    </Gallery>
    );
  }

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleImageClick : PropTypes.func.isRequired,
};

export default ImageGallery;