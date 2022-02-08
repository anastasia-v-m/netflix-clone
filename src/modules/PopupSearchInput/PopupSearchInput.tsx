import React, { ReactElement } from 'react';

import SearchIcon from '../../assets/SearchIcon';
import CloseIcon from '../../assets/CloseIcon';

interface ISearch {
  name: string;
}

export default class PopupSearchInput extends React.Component<{}, { isSearch: boolean }> {
  private searchFormRef: React.RefObject<HTMLInputElement>;

  constructor(props: ISearch) {
    super(props);
    this.state = {
      isSearch: true,
    };
    this.searchFormRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState((prevState) => ({
      isSearch: !prevState.isSearch,
    }));
    const searchForm = this.searchFormRef.current;
    searchForm!.classList.toggle('search-form-header__input_active');
  }

  renderButton(): ReactElement {
    let classNameSearch = 'search-button';
    let classNameClose = 'close-button';
    if (!this.state.isSearch) {
      classNameSearch += ' search-button_active';
      classNameClose += ' close-button_active';
      return (
        <form className="search-form-header" action="" placeholder="Search">
          <button type="button" className={classNameSearch}>
            <SearchIcon />
          </button>
          <input ref={this.searchFormRef} className="search-form-header__input" type="search" placeholder="Search" />
          <button type="button" className={classNameClose} onClick={this.handleClick}>
            <CloseIcon />
          </button>
        </form>
      );
    }
    return (
      <form className="search-form-header" action="" placeholder="Search">
        <button type="button" className={classNameSearch} onClick={this.handleClick}>
          <SearchIcon />
        </button>
        <input ref={this.searchFormRef} className="search-form-header__input" type="search" />
      </form>
    );
  }

  render(): ReactElement {
    return this.renderButton();
  }
}
