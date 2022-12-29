import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Feature/Posts/postSlice";
import usersReducer from "../Feature/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
