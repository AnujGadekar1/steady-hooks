// src/hooks/usePing.ts
import { useEffect, useState } from "react";

interface PingResult {
  online: boolean;
  latency: number | null;
}

export function usePing(
  url: string = "https://www.google.com/favicon.ico",
  interval: number = 5000
): PingResult {
  const [state, setState] = useState<PingResult>({
    online: navigator.onLine,
    latency: null
  });

  useEffect(() => {
    let timer: number;

    async function ping() {
      const start = performance.now();
      try {
        await fetch(url, { method: "HEAD", cache: "no-store" });
        setState({
          online: true,
          latency: Math.round(performance.now() - start)
        });
      } catch {
        setState({ online: false, latency: null });
      }
    }

    ping();
    timer = window.setInterval(ping, interval);

    return () => clearInterval(timer);
  }, [url, interval]);

  return state;
}
