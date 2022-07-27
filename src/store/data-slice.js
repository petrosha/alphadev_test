import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  initialState: {
    users:[]
  },
  reducers: {
    setUsers(state,action) {
      state.users = [].concat(action.payload);
    },
  },
});

export const dataActions = data.actions;
export default data.reducer;
