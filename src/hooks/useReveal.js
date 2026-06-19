import { useEffect, useRef, useState } from 'react';

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Trigger once the element has risen ~12% up into the viewport so the
      // fade is actually visible (not finished while still at the bottom edge).
      { threshold: 0.01, rootMargin: '0px 0px -12% 0px', ...options }
    );
    observer.observe(node);

    // Fallback: if the element is already comfortably in view on mount
    // (e.g. above-the-fold content, or a short page where the footer never
    // crosses the inset trigger line), reveal it right away.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      setVisible(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [visible, options]);

  return [ref, visible];
}

export function Reveal({ children, delay, as: Tag = 'div', className = '', ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      data-delay={delay}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
