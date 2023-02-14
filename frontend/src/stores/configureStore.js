import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import courseOfferReducer from '../reducers/courseOffer';
// import unitOfferReducer from '../reducers/unitOffer';
import AuthReducer from "./authStore";

export default () => {
  const store = createStore(
    combineReducers({
      auth: AuthReducer,
      // courseOffer: courseOfferReducer,
      // unitOffer: unitOfferReducer,
    }),
    applyMiddleware(thunk)
  );

  return store;
};
