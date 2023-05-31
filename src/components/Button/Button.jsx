import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
    return (
      <button type="button" onClick={onLoadMore} className="button-load-more">
        Load more
      </button>
    );
  };
  
  Button.propTypes = { onLoadMore: PropTypes.func.isRequired };
