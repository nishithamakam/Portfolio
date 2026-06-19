import React, { useEffect, useState, useCallback } from 'react';
import '../styles/ClickSpark.css';

let idCounter = 0;

function ClickSpark() {
  const [sparks, setSparks] = useState([]);

  const handleClick = useCallback((e) => {
    const id = ++idCounter;
    const spark = { id, x: e.clientX, y: e.clientY };
    setSparks((prev) => [...prev, spark]);
    window.setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== id));
    }, 1600);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div className="click-spark-layer" aria-hidden="true">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="click-spark"
          style={{ left: s.x, top: s.y }}
        >
          <span className="click-spark-dot" />
          <span className="click-spark-ring" />
        </span>
      ))}
    </div>
  );
}

export default ClickSpark;
