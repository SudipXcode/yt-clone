import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuickFilterState {
  activeCategory: string; // currently selected category
}

const initialState: QuickFilterState = {
  activeCategory: "All", // default active category
};

const quickFilterSlice = createSlice({
  name: "quickFilter",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload; // set clicked category as active
    },
    clearActiveCategory: (state) => {
      state.activeCategory = "All"; // reset to default
    },
  },
});

export const { setActiveCategory, clearActiveCategory } =
  quickFilterSlice.actions;
export default quickFilterSlice.reducer;
