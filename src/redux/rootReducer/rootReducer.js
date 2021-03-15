import { combineReducers } from "redux";
import { cakeReducer } from "../cake/cakeReducer";
import { iceCreamReducer } from "../iceCreame/iceCreamReducer";
import userReducer from "../user/userReducer";

const rootRenderer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user : userReducer
})

export default rootRenderer;