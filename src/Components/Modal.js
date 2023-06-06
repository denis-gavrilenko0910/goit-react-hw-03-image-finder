import { Component } from 'react';
import { createPortal } from 'react-dom';

const madalRoot = document.getElementById('modal_root');

export class Modal extends Component {
  componentDidMount() {}

  render() {
    return createPortal(
      <div className="overlay">
        <div className="modal">
          <img className="imageGalleryItem_image" src="" alt="" />
        </div>
      </div>,
      madalRoot,
    );
  }
}
