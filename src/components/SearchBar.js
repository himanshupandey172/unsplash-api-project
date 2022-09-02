import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = { term: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    return this.props.searchBarCallback(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
