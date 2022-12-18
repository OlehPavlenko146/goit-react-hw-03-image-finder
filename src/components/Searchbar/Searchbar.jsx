import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchWrap,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    query: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Please enter your request');
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchWrap>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <span>Search</span>
            <BiSearchAlt2 />
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </SearchWrap>
    );
  }
}
