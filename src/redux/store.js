import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/Todo";
export default configureStore({
  reducer: {
    todoReducer: todoReducer,
  },
});
