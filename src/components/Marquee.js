import React from 'react';
import '../styles/Marquee.css';

const items = [
  'Available for opportunities',
  'Currently @ Bristol Myers Squibb',
  'Based in Hyderabad, IN',
  'Open to remote & collaboration',
  'Always learning',
];

function Marquee() {
  // duplicate the list so the animation loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((text, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-text">{text}</span>
            <span className="marquee-dot">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
