import { createSlice } from "@reduxjs/toolkit";

interface SidenavState {
  isOpen: boolean;
}

const initialState: SidenavState = {
  isOpen: false,
};

const sidenavSlice = createSlice({
  name: "sidenav",
  initialState,
  reducers: {
    openSidenav: (state) => {
      state.isOpen = true;
    },
    closeSidenav: (state) => {
      state.isOpen = false;
    },
    toggleSidenav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSidenav, closeSidenav, toggleSidenav } =
  sidenavSlice.actions;
export default sidenavSlice.reducer;
