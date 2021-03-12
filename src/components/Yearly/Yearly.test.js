import React from "react";
import { render } from "@testing-library/react";
import Yearly from "./Yearly";

describe("Yearly tests", () => {
  it("should render", () => {
    expect(render(<Yearly />)).toBeTruthy();
  });
});
