import { Component } from 'react';
import { createPortal } from 'react-dom';

const madalRoot = document.getElementById('modal_root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose(); //вызываю через пропс onClose и выдаёт undefined.

        console.log('нажал escape');
      }
    });
  }
  componentWillUnmount() {}

  render() {
    return createPortal(
      <div className="overlay">
        <div className="modal">{this.props.children}</div>
      </div>,
      madalRoot,
    );
  }
}
