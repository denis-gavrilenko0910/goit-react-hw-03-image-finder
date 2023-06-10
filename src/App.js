import { Component } from 'react';
import { Modal } from './Components/Modal';
import { Searchbar } from './Components/Searchbar';
// import { Button } from './Components/Button';
import { ImageGallery } from './Components/ImageGallery';

class App extends Component {
  state = {
    showModal: false,
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <Searchbar />
        <button type="button" onClick={this.onToggleModal}>
          open
        </button>
        {showModal && (
          <Modal onClose={this.onToggleModal}>
            <h1>hello</h1>
            <img className="imageGalleryItem_image" src="" alt="" />
            <button type="button" onClick={this.onToggleModal}>
              close
            </button>
          </Modal>
        )}
        {/* <Button /> */}
        <ImageGallery />
      </div>
    );
  }
}

export default App;
