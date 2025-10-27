"use client";

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { openSidenav, closeSidenav } from "../redux/slices/sidenavSlice";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
            // ✅ Load saved sidenav state from localStorage
            const saved = localStorage.getItem("reduxState");

            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.sidenav?.isOpen) {
                    store.dispatch(openSidenav());
                } else {
                    store.dispatch(closeSidenav());
                }
            }

            // ✅ Save only sidenav state on every store update
            const unsubscribe = store.subscribe(() => {
                const { sidenav } = store.getState();
                localStorage.setItem("reduxState", JSON.stringify({ sidenav }));
            });

            setHydrated(true);

            return unsubscribe;
        } catch (err) {
            console.error("Failed to sync sidenav state:", err);
        }
    }, []);

    // 🧠 Prevent hydration mismatch
    if (!hydrated) return null;

    return <Provider store={store}>{children}</Provider>;
}
