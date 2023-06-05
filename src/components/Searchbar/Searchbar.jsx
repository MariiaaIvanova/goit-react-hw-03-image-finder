import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { Header, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from './Searchbar.styled';

export class Searchbar extends Component {
    static propTypes = {
        onSearchSubmit: PropTypes.func.isRequired,
    };
    state = {
        searchValue: '',
    };

    handleQueryChange = event => {
        this.setState({ searchValue: event.currentTarget.value })
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchValue);
        this.setState({ searchValue: '' });
    }
   render() {
    return (
     <Header >
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FiSearch style={{ width: 22, height: 22 }} />
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
export default Searchbar;