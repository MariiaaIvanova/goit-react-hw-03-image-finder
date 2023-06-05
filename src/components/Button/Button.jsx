import PropTypes from 'prop-types';
import { LoadMoreButton, ContainerButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
   <ContainerButton>
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </ContainerButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};