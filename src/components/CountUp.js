import React, { useEffect, useRef, useState } from 'react';

function CountUp({ end, duration = 1600, decimals = 0, suffix = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(end * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value);

  return (
    <span ref={ref}>
      {display}
      {suffix && <em>{suffix}</em>}
    </span>
  );
}

export default CountUp;
