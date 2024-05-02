// Save in button.bench.tsx
import * as React from "react";
import {
  Button,
  FluentProvider,
  webDarkTheme,
} from "@fluentui/react-components";
import "./index.css";

const itemRenderer: React.FC = () => {
  return (
    <>
      {/* <Button className="test_button_absurd">React button</Button>
      <Button className="test_button_absurd1">React button</Button>
      <Button className="test_button_absurd2">React button</Button>
      <Button className="test_button_absurd3">React button</Button>
      <Button className="test_button_absurd4">React button</Button>
      <Button className="test_button_absurd5">React button</Button>
      <Button className="test_button_absurd6">React button</Button>
      <Button className="test_button_absurd7">React button</Button>
      <Button className="test_button_absurd8">React button</Button>
      <Button className="test_button_absurd9">React button</Button>
      <Button className="test_button_absurd10">React button</Button> */}
      {/* basic */}

      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
      <Button>React button</Button>
    </>
  );
};

export default itemRenderer;

export { tests } from "@tensile-perf/react";
