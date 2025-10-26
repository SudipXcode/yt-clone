import { configureStore } from "@reduxjs/toolkit";
import sidenavReducer from "./slices/sidenavSlice";

// ✅ Load state from localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state:", err);
    return undefined;
  }
}

// ✅ Save state to localStorage
function saveState(state: unknown) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
}

// ✅ Create store with persisted state
export const store = configureStore({
  reducer: {
    sidenav: sidenavReducer,
  },
  preloadedState: typeof window !== "undefined" ? loadState() : undefined,
});

// ✅ Listen for state changes and save
if (typeof window !== "undefined") {
  store.subscribe(() => {
    saveState({
      sidenav: store.getState().sidenav,
    });
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
