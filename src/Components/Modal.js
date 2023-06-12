import { Component } from 'react';
import { createPortal } from 'react-dom';

const madalRoot = document.getElementById('modal_root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.esc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.esc);
  }
  esc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">{this.props.children}</div>
      </div>,
      madalRoot,
    );
  }
}
