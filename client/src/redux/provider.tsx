"use client";

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { openSidenav, closeSidenav } from "../redux/slices/sidenavSlice";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        // ✅ Run only on client
        try {
            const saved = localStorage.getItem("sidenavState");

            if (saved) {
                const { isOpen } = JSON.parse(saved);
                if (isOpen) store.dispatch(openSidenav());
                else store.dispatch(closeSidenav());
            }

            // ✅ Save Redux state on every change
            const unsubscribe = store.subscribe(() => {
                const state = store.getState().sidenav;
                localStorage.setItem("sidenavState", JSON.stringify(state));
            });

            // ✅ Mark hydration complete
            setHydrated(true);

            return unsubscribe;
        } catch (err) {
            console.error("Failed to sync sidenav state:", err);
        }
    }, []);

    // 🧠 Prevent hydration mismatch
    if (!hydrated) {
        // You can return `null` or a small loader here
        return null;
    }

    return <Provider store={store}>{children}</Provider>;
}
