import {
  FETCH_MY_LIST,
  FETCH_RECOMMENDATIONS,
  ADD_MOVIE,
  REMOVE_MOVIE,
  REMOVE_RECOMMENDATION,
  ADD_RECOMMENDATION
} from "../constants/actions_types";
import data from "../config/mock_database.json";

export const fetchMyList = () => {
  return dispatch => {
    dispatch({
      type: FETCH_MY_LIST,
      payload: data["mylist"]
    });
  };
};

export const fetchRecommendations = () => {
  //  fetch data from imported mockup JSON database inside config folder
  return dispatch => {
    dispatch({
      type: FETCH_RECOMMENDATIONS,
      payload: data["recommendations"]
    });
  };
};
/*
  dispatch two actions, first is to add movie to myList from recommended list,
  second is to remove movie from recommended list.
*/
export const addMovie = movie => {
  return dispatch => {
    dispatch({
      type: ADD_MOVIE,
      payload: [movie]
    });
    dispatch({
      type: REMOVE_RECOMMENDATION,
      payload: movie.id
    });
  };
};

/*
  dispatch two actions, first is to remove movie to myList and add it to recommended list,
  second is to update the new recommended list.
*/
export const removeMovie = movie => {
  return dispatch => {
    dispatch({
      type: REMOVE_MOVIE,
      payload: movie.id
    });
    dispatch({
      type: ADD_RECOMMENDATION,
      payload: [movie]
    });
  };
};
