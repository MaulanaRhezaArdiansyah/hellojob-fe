import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./reducers/users";

const reducers = combineReducers({
  users: usersReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
