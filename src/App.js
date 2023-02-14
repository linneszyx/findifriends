import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { people } from "./people";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: people,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  render() {
    const filterpeople = this.state.people.filter((people) => {
      return people.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>FindiFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList people={filterpeople} />
      </div>
    );
  }
}
export default App;
