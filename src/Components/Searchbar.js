import { Component } from 'react';
// import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchImg: '',
  };

  handleChange = e => {
    this.setState({ searchImg: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ ...this.state });
    this.props.onSubmit({ ...this.state });
    this.setState({ searchImg: '' });
  };

  render() {
    const { searchImg } = this.state;
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="searchForm">
          <button type="submit" className="searchForm_button">
            <span className="searchForm_button_label">Search</span>
          </button>

          <input
            className="searchForm_input"
            name="search"
            type="text"
            value={searchImg}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
