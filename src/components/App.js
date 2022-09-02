import React from "react";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";

import SearchBar from "./SearchBar";

//practice

//practice

class App extends React.Component {
  state = { listofimages: [] };

  handleSearchBarInputValue = async (callback) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: callback },
    });

    this.setState({ listofimages: response.data.results });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar searchBarCallback={this.handleSearchBarInputValue} />

        <ImageList imageprop={this.state.listofimages} />
      </div>
    );
  }
}
export default App;
