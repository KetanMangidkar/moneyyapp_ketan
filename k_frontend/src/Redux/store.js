

import {legacy_createStore, applyMiddleware, combineReducers} from "redux";

import thunk from "redux-thunk"
import { productReducer } from "./products/reducer";
import { cartReducer } from "./cart/reducer";
import { userLoginReducer } from "./userLogin/reducer";
const rootReducers = combineReducers({
    product:productReducer,
   cart: cartReducer,
   userLogin :userLoginReducer,
})
const store = legacy_createStore(rootReducers,applyMiddleware(thunk))

export {store};