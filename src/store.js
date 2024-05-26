// const redux = require("redux");

// const { timerReducer } = require("./redux/reducers/timerReducer");
// const { counterReducer } = require("./redux/reducers/counterReducer");

// // refactor to use configureStore
// const rootReducer = redux.combineReducers({
//   timer: timerReducer,
//   counter: counterReducer
// });
// export const store = redux.createStore(rootReducer);

import {configureStore} from "@reduxjs/toolkit";
import timerReducer from "./redux/reducers/timerReducer";  // Correct import
import counterReducer from "./redux/reducers/counterReducer";  // Correct import

const store = configureStore({
  reducer:{

    timer:timerReducer,
    counter:counterReducer
  
  },


})


export default store;