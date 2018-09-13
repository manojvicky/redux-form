import { combineReducers } from "redux";
import initializeForm from "./InitializeFrom";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  initializeForm,
  form: formReducer
});

export default rootReducer;
