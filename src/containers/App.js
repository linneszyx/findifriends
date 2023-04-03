import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import { setSearchField, requestPeople } from "../actions";

import "./App.css";
const mapStateToProps = (state) => {
  return {
    searchField: state.searchPeople.searchField,
    people: state.requestPeople.people,
    isPending: state.requestPeople.isPending,
    error: state.requestPeople.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPeople: () => dispatch(requestPeople()),
  };
};
class App extends Component {
  componentDidMount() {
    this.props.onRequestPeople();
  }
  render() {
    const { searchField, onSearchChange, people, isPending } = this.props;
    const filterpeople = people.filter((people) => {
      return people.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList people={filterpeople} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
