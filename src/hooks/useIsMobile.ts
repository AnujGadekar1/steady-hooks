import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      setIsMobile(width <= breakpoint);
    });

    observer.observe(document.body);

    return () => observer.disconnect();
  }, [breakpoint]);

  return isMobile;
}
