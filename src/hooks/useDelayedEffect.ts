import { DependencyList, EffectCallback, useEffect } from "react";

export const useDelayedEffect = (
  delayMs: number,
  effect: EffectCallback,
  dependencies: DependencyList
) =>
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      effect();
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, dependencies);
