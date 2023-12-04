import React from 'react';

export default function Logo({ width = '200' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} height={width / 2}>
      <path d="M 50 10 L 73.1 50 L 50 90 L 26.9 50 Z" fill="#67E8F9" />
      <path d="M 50 10 L 73.1 50 L 50 90 L 26.9 50 Z" fill="#F472B6" transform="rotate(60,50 90)" />
      <path d="M 50 10 L 73.1 50 L 50 90 L 26.9 50 Z" fill="#FDE047" transform="rotate(-60,50 90)" />
    </svg>
  );
}
