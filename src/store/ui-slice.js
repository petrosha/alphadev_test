import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    speakersOffset: 0,
    visibleMenuCompact: false,
    activeMenu:0
  },
  reducers: {
    setVisibleMenuCompact(state) {
      state.visibleMenuCompact = true;
    },
    setInVisibleMenuCompact(state) {
      state.visibleMenuCompact = false;
    },
    setActiveMenu(state,action){
      state.activeMenu=action.payload;
    },
    setSpeakersOffset(state,action){
      state.speakersOffset=action.payload;
    }
  },
});

export const uiActions = ui.actions;
export default ui.reducer;
