import {
  FETCH_RECOMMENDATIONS,
  REMOVE_RECOMMENDATION,
  ADD_RECOMMENDATION
} from "../constants/actions_types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECOMMENDATIONS:
      return [...state, ...action.payload];
    case ADD_RECOMMENDATION:
      return [...state, ...action.payload];
    case REMOVE_RECOMMENDATION:
      // remove movie from recommended List by filtering movie with same id
      let arr = state.filter(movie => {
        return movie.id !== action.payload;
      });
      return arr;
    default:
      return state;
  }
}
