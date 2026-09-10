import { useEffect, useRef } from 'react';

export function usePointerHeat(enabled = true) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pointer = useRef({ x: 0.5, y: 0.5, vx: 0, vy: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    let previous = { x: 0.5, y: 0.5 };
    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      pointer.current = { x, y, vx: x - previous.x, vy: y - previous.y };
      previous = { x, y };
      node.style.setProperty('--mx', `${x * 100}%`);
      node.style.setProperty('--my', `${y * 100}%`);
    };
    node.addEventListener('pointermove', onMove);
    return () => node.removeEventListener('pointermove', onMove);
  }, [enabled]);

  return { ref, pointer };
}
