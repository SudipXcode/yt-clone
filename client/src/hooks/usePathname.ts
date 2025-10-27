"use client";

import { usePathname } from "next/navigation";

/**
 * Returns the base page path like "/", "/shows", "/login", etc.
 * For example:
 *  - "/shows/123" => "/shows"
 *  - "/login" => "/login"
 *  - "/" => "/"
 */
export default function useCurrentPage() {
  const pathname = usePathname();

  if (!pathname) return "/";

  // Split path and get first segment
  const parts = pathname.split("/").filter(Boolean);
  return parts.length > 0 ? `/${parts[0]}` : "/";
}
