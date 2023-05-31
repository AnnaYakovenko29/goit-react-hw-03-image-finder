import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };
  closeByBackdrop = event => {
    if (event.currentTarget === event.target) {
        this.props.onClose();
    }
  }

  render() {
    // const { closeModal, tags, modalImg } = this.props;
    return createPortal(
      <div className="overlay" onClick={this.closeByBackdrop}>
        <div className="modal">
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
