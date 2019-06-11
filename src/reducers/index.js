import { combineReducers } from "redux";
import myListReducer from "./my_list_reducer";
import recommendationsReducer from "./recommendations_reducer";

const reducer = combineReducers({
  myList: myListReducer,
  recommendations: recommendationsReducer
});

export default reducer;
