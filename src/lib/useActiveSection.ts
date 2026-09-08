import { useEffect, useState } from 'react';

/**
 * Marca como activa la sección visible más alta del viewport.
 * Se usa para el estado del nav del header.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.35 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [ids]);

  return active;
}
