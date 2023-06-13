import { Component } from 'react';
import { fetchPixabayImages } from './Service/pix_api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './components/Modal';
import { Searchbar } from './components/Searchbar';
import { Button } from './components/Button';
import { ImageGallery } from './components/ImageGallery';
import { Loader } from './components/Loader';

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
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputQuery, currentPage } = this.state;
    if (
      prevState.inputQuery !== inputQuery ||
      prevState.currentPage !== currentPage
    ) {
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
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { inputQuery, currentPage } = this.state;
    this.setState(() => ({
      isLoading: true,
    }));
    fetchPixabayImages(inputQuery, currentPage)
      .then(data => {
        if (data.hits.length === 0) {
          return toast('something went wrong');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          loadMore: currentPage < Math.ceil(data.totalHits / 12),
        }));
        if (currentPage > 2) {
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

  loadMoreImages = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { showModal, images, loadMore, isLoading, largeImageURL, tags } =
      this.state;
    const showLoadMoreBtn = loadMore;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {isLoading && <Loader />}
        {showModal && (
          <Modal onClose={this.onToggleModal}>
            <img className="modal" src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <ImageGallery images={images} onClick={this.onModal} />
        {showLoadMoreBtn && (
          <Button
            className="button"
            type="button"
            disabled={this.state.loadMore}
            btnName="Load more"
            buttonVisibility={this.state.loadMore}
            onClick={this.loadMoreImages}
          />
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
