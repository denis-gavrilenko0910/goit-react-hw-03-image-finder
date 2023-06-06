import { Component } from 'react';
import { Modal } from './Components/Modal';
import { Searchbar } from './Components/Searchbar';
import { Button } from './Components/Button';

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
        <Searchbar />
        {showModal && <Modal />}
        <Button />
      </div>
    );
  }
}

export default App;
