// custom hooks that will check the current viewport of the page
// allows to dynamically render components in specific viewport
// example is sidebar and menu

import { useEffect, useMemo, useState } from "react";

export const useMediaQuery = (query: string, delay = 0): boolean => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  // Memoize media query list
  const mediaQueryList = useMemo(() => {
    if (typeof window === "undefined") return null;
    return window.matchMedia(query);
  }, [query]);

  useEffect(() => {
    if (!mediaQueryList) return;

    let timeOutId: ReturnType<typeof setTimeout>;

    const handler = () => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        setMatches(mediaQueryList.matches);
      }, delay); // Debounce delay
    };

    handler(); // Initial check
    mediaQueryList.addEventListener("change", handler);

    return () => {
      clearTimeout(timeOutId);
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [mediaQueryList, delay]);

  return matches;
};
