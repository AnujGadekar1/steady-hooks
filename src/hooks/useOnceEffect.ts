// src/hooks/useOnceEffect.ts

import { EffectCallback, useEffect, useRef } from "react";

export function useOnceEffect(effect: EffectCallback) {
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;

    hasRunRef.current = true;
    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
