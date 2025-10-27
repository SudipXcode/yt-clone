import { configureStore } from "@reduxjs/toolkit";
import sidenavReducer from "./slices/sidenavSlice";
import quickFilterReducer from "./slices/QuickFilter"; // ✅ import your new slice

// ✅ Load state from localStorage for sidenav only
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

// ✅ Save state to localStorage for sidenav only
function saveState(state: unknown) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
}

// ✅ Create store with persisted state for sidenav only
export const store = configureStore({
  reducer: {
    sidenav: sidenavReducer,
    quickFilter: quickFilterReducer, // add slice here
  },
  preloadedState: typeof window !== "undefined" ? loadState() : undefined,
});

// ✅ Listen for state changes and save only sidenav state
if (typeof window !== "undefined") {
  store.subscribe(() => {
    saveState({
      sidenav: store.getState().sidenav,
      // do NOT save quickFilter
    });
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
