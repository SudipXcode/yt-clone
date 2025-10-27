"use client";

import React from "react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

                {/* Text */}
                <p className="mt-4 text-gray-600 text-lg font-semibold animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
