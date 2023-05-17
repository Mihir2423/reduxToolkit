import { createSlice } from "@reduxjs/toolkit";

import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: { userList },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uuser = state.userList.find((f) => f.id == id);
      if (uuser) {
        uuser.name = name;
        uuser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uuser = state.userList.find((f) => f.id == id);
      if (uuser) {
        state.userList = state.userList.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
