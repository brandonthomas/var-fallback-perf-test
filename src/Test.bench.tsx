// Save in button.bench.tsx
import * as React from 'react';
import { Button, FluentProvider, webDarkTheme } from '@fluentui/react-components';
import './index.css'

const itemRenderer: React.FC = () => {
  return <Button >React button</Button>;
};

export default itemRenderer;

export { tests } from "@tensile-perf/react";