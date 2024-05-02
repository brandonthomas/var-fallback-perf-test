import * as React from "react";
import { TestApp, tests } from "@tensile-perf/react";
import type { TestRenderParams } from "@tensile-perf/react";
import {
  FluentProvider,
  webDarkTheme,
  useButtonStyles_unstable,
  ButtonState,
  mergeClasses,
  makeResetStyles,
} from "@fluentui/react-components";

export const useFancyButtonStyles = (state: ButtonState) => {
  const styles = useButtonStyles_unstable(state);

  const testStyles = makeResetStyles({
    backgroundColor: `var(--colorPaletteYellowBorder1)`,
    color: `var(--colorPaletteBerryForeground1)`,
    borderColor: `var(--colorPaletteCranberryForeground2)`,
  });

  state.root.className = mergeClasses(state.root.className, testStyles());
};

const customStyles = {
  useButtonStyles_unstable: useFancyButtonStyles,
};

const FluentTestApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <FluentProvider
      theme={webDarkTheme}
      customStyleHooks_unstable={customStyles}
    >
      <TestApp>{children}</TestApp>
    </FluentProvider>
  );
};

const wrappedTests = {};

for (const testName of Object.keys(tests)) {
  const test = tests[testName];

  wrappedTests[testName] = (params: Omit<TestRenderParams, "TestWrapper">) => {
    return test({ ...params, TestWrapper: FluentTestApp });
  };
}

export { wrappedTests as tests };
