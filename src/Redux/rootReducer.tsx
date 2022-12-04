import { combineReducers } from "redux";
import { commonReducer } from "./common/CommonReducer";
import projectReducer from "./project/reducers";
import userReducer from "./User/reducers";

const rootReducers = combineReducers({
  common: commonReducer,
  user : userReducer,
  project: projectReducer
});
export default rootReducers;
export type State = ReturnType<typeof rootReducers>;
