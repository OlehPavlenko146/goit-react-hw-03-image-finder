import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Searchbar/Searchbar';
import { api } from './services/api';
import { Button } from './Button/Button';
import { StartTitle, ErrorMessage } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    total: 0,
    status: 'idle',
  };

  handleFormSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true, error: null });
      api
        .fetchImages(this.state.query, this.state.page)
        .then(images => {
          console.log(images);
          this.setState({
            images: images.hits,
            total: images.total,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    api
      .fetchImages(this.state.query, this.state.page)

      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { isLoading, query, images, error, status, total } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {!query && <StartTitle>Enter what would you like to find</StartTitle>}
        {error && <ErrorMessage> {error.message}</ErrorMessage>}
        {status === 'resolved' && <ImageGallery images={images} />}
        {status === 'resolved' && total === 0 && (
          <ErrorMessage>Nothing found</ErrorMessage>
        )}
        {images.length >= 12 && <Button onClick={this.loadMore} />}
      </>
    );
  }
}
