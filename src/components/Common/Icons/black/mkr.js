import React from 'react';

const SvgMkr = props => (
  <svg width={64} height={64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.838 12.056l6.032 4.367V22.5h1.838v-6.973L6 8.5v14h1.838zm10.292 4.367l6.032-4.367V22.5H26v-14l-9.708 7.027V22.5h1.838z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMkr;
