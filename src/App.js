import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList";
import SearchBox from "./components/searchBox/searchBox";

class App extends Component {
  state = {
    users: [],
    searchField: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }
  render() {
    const { users, searchField } = this.state;
    const filteredCard = users.filter(
      user =>
        user.name.toLowerCase().includes(searchField.toLowerCase()) ||
        user.email.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="search-heading">Please by name or email</h1>
        <SearchBox
          placeholder="Search card..."
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList users={filteredCard}></CardList>
        {filteredCard.length === 0 ? (
          <h1 className="no-result">No search result found</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
