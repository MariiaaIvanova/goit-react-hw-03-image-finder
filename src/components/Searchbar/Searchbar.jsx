import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, SearchForm, SearchButton, SearchInput, BtnSpan } from './Searchbar.styled';

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
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BtnSpan>Search</BtnSpan>
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