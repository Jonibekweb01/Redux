import { combineReducers } from "redux";
import { macReducer } from "./mac/macReducer"
import { phoneReducer } from "./phone/phoneReducer";

export const rootReducer = combineReducers({
    mac: macReducer,
    phone: phoneReducer,
})