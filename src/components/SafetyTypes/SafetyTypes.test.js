import React from "react";
import { render } from "@testing-library/react";
import SafetyTypes from "./SafetyTypes";

describe("SafetyTypes tests", () => {
  it("should render", () => {
    expect(render(<SafetyTypes />)).toBeTruthy();
  });
});
