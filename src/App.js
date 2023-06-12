import { Component } from 'react';
import { fetchPixabyImages } from './Service/pix_api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Components/Modal';
import { Searchbar } from './Components/Searchbar';
import { Button } from './Components/Button';
import { ImageGallery } from './Components/ImageGallery';
import { Loader } from './Components/Loader';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    largeImageURL: '',
    tags: '',
    currentPage: 1,
    inputQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputQuery !== this.state.inputQuery) {
      this.setState(prevState => ({
        images: [],
        currentPage: 1,
      }));
      this.fetchImages();
    }
  }

  handleSearchSubmit = ({ searchImg }) => {
    if (searchImg.trim() === '') {
      toast('Please enter desirable image name for search');
      return;
    }
    this.setState({
      inputQuery: searchImg,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchImages = () => {
    this.setState(() => ({
      isLoading: true,
    }));
    fetchPixabyImages(this.state.inputQuery, this.state.currentPage)
      .then(data => {
        if (data.length === 0) {
          return toast('something went wrong');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
        }));
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(() => {
        toast('smth bad');
      })
      .finally(() => {
        this.setState(() => ({
          isLoading: false,
        }));
      });
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onModal = ({ largeImageURL, tags }) => {
    this.setState({
      largeImageURL: largeImageURL,
      tags: tags,
    });
    this.onToggleModal();
  };

  render() {
    const { showModal, images, isLoading, largeImageURL, tags } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {isLoading && <Loader />}
        {showModal && (
          <Modal onClose={this.onToggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <ImageGallery images={images} onClick={this.onModal} />
        {images.length > 0 && (
          <Button
            className="button"
            type="button"
            btnName="Load more"
            onClick={this.fetchImages}
          />
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
