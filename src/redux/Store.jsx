import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BudgetReducer from "./BudgetSlice";

const reducer = combineReducers({
    budget: BudgetReducer
})

const store = configureStore({reducer})

export default store