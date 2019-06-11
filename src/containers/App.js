import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/App.css";
import { fetchMyList, fetchRecommendations } from "../actions/movies_actions";
import MyList from "../components/MyList";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";

class App extends Component {
  componentDidMount() {
    // retrieve myList and recommended movies when component mounted
    this.props.fetchMyList();
    this.props.fetchRecommendations();
  }
  render() {
    const myList = this.props.myList;
    const recommendations = this.props.recommendations;
    // display loading message when component still getting data
    if (!myList && !recommendations)
      return <div className="App">Loading...</div>;
    return (
      <div className="App">
        <MyList myList={myList} />
        <Recommendations recommendations={recommendations} />
        {myList.length > 0 ? <hr /> : ""}
        <Footer myList={myList} />
      </div>
    );
  }
}

const mapStateToProps = ({ myList, recommendations }) => {
  return {
    myList,
    recommendations
  };
};

export default connect(
  mapStateToProps,
  { fetchMyList, fetchRecommendations }
)(App);
