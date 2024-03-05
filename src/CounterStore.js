import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";


const CounterStore = configureStore({
    reducer: {
        counterReducer: counterSlice

    }
})
export default CounterStore