import React, { Component } from "react";
import { connect } from "react-redux";

import { addMovie, removeMovie } from "../actions/movies_actions";

class Button extends Component {
  handleClick = () => {
    const usage = this.props.usage;
    const movie = this.props.movie;
    if (usage === "add") {
      this.props.addMovie(movie);
    } else {
      this.props.removeMovie(movie);
    }
  };
  render() {
    const usage = this.props.usage;
    return (
      <div>
        <button className={`btn-${usage}`} onClick={this.handleClick}>
          {usage}
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addMovie, removeMovie }
)(Button);
