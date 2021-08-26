import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    counter: 0
};
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        decrement: (state) => {
            console.log('couterSlice...decrement')
            state.counter = state.counter - 1;
        },
        increment: (state) => {
            console.log('couterSlice...increment')
            state.counter = state.counter + 1;
        }
    }
})

export const {decrement, increment} = counterSlice.actions;
export default counterSlice.reducer;