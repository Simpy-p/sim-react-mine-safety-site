import React from "react";
import { render } from "@testing-library/react";
import TopPanel from "./TopPanel";

describe("TopPanel tests", () => {
  it("should render", () => {
    expect(render(<TopPanel />)).toBeTruthy();
  });
});
