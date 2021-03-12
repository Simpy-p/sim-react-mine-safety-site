import React from "react";
import { render } from "@testing-library/react";
import Monthly from "./Monthly";

describe("Monthly tests", () => {
  it("should render", () => {
    expect(render(<Monthly />)).toBeTruthy();
  });
});
