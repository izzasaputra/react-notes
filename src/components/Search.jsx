import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
    this.onSubmitSearchEventHandler =
      this.onSubmitSearchEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        inputSearch: event.target.value,
      };
    });
  }

  onSubmitSearchEventHandler(event) {
    event.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitSearchEventHandler}>
          <div className="search-form">
            <label htmlFor="search" className="search-label">Cari</label>
            <input
              id="search"
              type="text"
              value={this.state.inputSearch}
              onChange={this.onSearchChangeEventHandler}
              className="search-input"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
