import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGallaryItem = ({ onClick, tags, webformatURL }) => {
    return (
        <GalleryItem>
            <GalleryImage
                src={webformatURL}
                alt={tags}
                onClick={onClick} />
        </GalleryItem>
    );
};
ImageGallaryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    
}
export default ImageGallaryItem;