import { Component } from 'react';
import { Modal } from './Components/Modal';
// import { Searchbar } from './Components/Searchbar';
// import { Button } from './Components/Button';
// import { ImageGallery } from './Components/ImageGallery';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        {/* <Searchbar /> */}
        <button type="button" onClick={this.toggleModal}>
          open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img className="imageGalleryItem_image" src="" alt="" />
            <button type="button" onClick={this.toggleModal}>
              {console.log(this.props.toggleModal)}
              close
            </button>
          </Modal>
        )}
        {/* <Button /> */}
        {/* <ImageGallery /> */}
      </div>
    );
  }
}

export default App;
