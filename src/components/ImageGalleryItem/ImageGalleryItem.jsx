import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <li className="gallery-item">
        <img
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
          className="gallery-item-img"
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img 
            src={largeImageURL} 
            alt={tags}/>
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
