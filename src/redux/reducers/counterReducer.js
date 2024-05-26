// remove the counter action creators imports
// import {
//   DECREMENT_COUNTER,
//   INCREMENT_COUNTER,
//   RESET_COUNTER
// } from "../actions/counterActions";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method
// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// a function that accepts an initial state, and object full of reducer
// function and a "slice name" and automatically generates
// action creators and action  types that corresponds to reducer and state



// Reducer using Redux Toolkit

// const counterReducer = createSlice({
//   name:'counter',
//   initialState:INITIAL_STATE,
//   reducer:{

//     increment_Counter:(state,action)=>{
//       state.count({
//         count: ++state.count
//       }),

//       decrement_Counter:(state,action)=>{
//       state.count({
//         count:--state.count
//       }),

//       reset_counter:({state,action}=>{
//         state.count({

//         })
//       })
//       }

      
//     }

//   }
// })


const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.count += 1;
    },
    decrementCounter: (state) => {
      state.count -= 1;
    },
    resetCounter: (state) => {
      state.count = 0;
    }
  }
});

// export the counter reducer function and action creators here


export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;