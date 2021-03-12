import React from "react";
import { render } from "@testing-library/react";
import NavItems from "./NavItems";

describe("NavItems tests", () => {
  it("should render", () => {
    expect(render(<NavItems />)).toBeTruthy();
  });
});
