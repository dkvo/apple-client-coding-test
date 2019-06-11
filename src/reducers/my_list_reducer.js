import {
  FETCH_MY_LIST,
  ADD_MOVIE,
  REMOVE_MOVIE
} from "../constants/actions_types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MY_LIST:
      return [...state, ...action.payload];
    case ADD_MOVIE:
      return [...state, ...action.payload];
    case REMOVE_MOVIE:
      // remove movie from myList by filtering movie with same id
      let arr = state.filter(movie => {
        return movie.id !== action.payload;
      });
      return arr;
    default:
      return state;
  }
}
