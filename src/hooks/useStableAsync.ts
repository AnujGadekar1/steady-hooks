import { useCallback, useEffect, useRef, useState } from "react";

type AsyncFn<TArgs extends any[], TResult> = (...args: TArgs) => Promise<TResult>;

export function useStableAsync<TArgs extends any[], TResult>(
  asyncFn: AsyncFn<TArgs, TResult>
) {
  const [data, setData] = useState<TResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const callIdRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const run = useCallback(
    async (...args: TArgs) => {
      const callId = ++callIdRef.current;

      setLoading(true);
      setError(null);

      try {
        const result = await asyncFn(...args);

        if (!mountedRef.current || callId !== callIdRef.current) {
          return;
        }

        setData(result);
        setLoading(false);
        return result;
      } catch (err) {
        if (!mountedRef.current || callId !== callIdRef.current) {
          return;
        }

        setError(err);
        setLoading(false);
        throw err;
      }
    },
    [asyncFn]
  );

  const reset = useCallback(() => {
    if (!mountedRef.current) return;
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    run,
    data,
    loading,
    error,
    reset
  };
}
