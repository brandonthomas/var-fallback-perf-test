// Save in button.bench.tsx
import * as React from 'react';
import './index.css'

const itemRenderer: React.FC = () => {
  return <button className='test_button_absurd'>React button</button>;
};

export default itemRenderer;

export { tests } from "@tensile-perf/react";