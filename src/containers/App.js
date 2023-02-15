import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchfield: "",
    };
  }
  componentDidMount() {
   for(let i=0;i<20;i++){

     fetch("https://jsonplaceholder.typicode.com/users")
       .then((response) => response.json())
       .then((user) => this.setState({ people: user }));
   }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const {people,searchfield} = this.state
    const filterpeople = people.filter((people) => {
      return people.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return !people.length ?
       <h1 className="tc">Loading</h1> :
       (
        <div className="tc">
          <h1 className="f2">FINDI FRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
            <CardList people={filterpeople} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}
export default App;
