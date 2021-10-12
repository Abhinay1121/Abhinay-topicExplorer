import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import SearchResult from "./components/SearchResult";


class App extends React.Component {

  state = { searchTerm: 'react'};

  constructor() {
    super();
  }
  
  handleSearchChange = key => {
    //update the search term when user type in the search bar
    this.setState({ searchTerm: key });
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render(){
    return (
      
      <div>
        <Header initSearch={this.state.searchTerm} onSearchChange={this.handleSearchChange}></Header>
        <div>
          <SearchResult search={this.state.searchTerm}></SearchResult>
        </div>
     
      </div>
    );
  }
}

export default App;
