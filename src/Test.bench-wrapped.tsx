// Save in button.bench.tsx
import * as React from "react";
import { Button } from "@fluentui/react-components";
// import './index.css'
import { tests } from "./wrapper";

const itemRenderer: React.FC = () => {
  return <Button>React button</Button>;
};

export default itemRenderer;

export { tests };
