"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
    const searchParams = useSearchParams();
    const query = searchParams.get("search_query"); // ← gets "raftaar x badshah - baawe reaction"
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!query) return;

        const fetchResults = async () => {
            setLoading(true);
            try {
                // 👇 make your API call with query
                const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                setResults(data.results || []);
            } catch (err) {
                console.error("Error fetching:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query]); // re-fetch if query changes

    return (
        <div className="p-6">
            <h1 className="text-xl text-white mb-4">
                Results for: <span className="text-blue-400">{query}</span>
            </h1>

            {loading ? (
                <p className="text-gray-400">Loading...</p>
            ) : (
                results.map((item, i) => (
                    <div key={i} className="text-white">{item.title}</div>
                ))
            )}
        </div>
    );
}
