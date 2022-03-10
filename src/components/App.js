import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="app-container ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
