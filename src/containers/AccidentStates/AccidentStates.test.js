import React from "react";
import { render } from "@testing-library/react";
import AccidentStates from "./AccidentStates";

describe("AccidentStates tests", () => {
  it("should render", () => {
    expect(render(<AccidentStates />)).toBeTruthy();
  });
});
