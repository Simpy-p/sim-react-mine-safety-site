import React from "react";
import { render } from "@testing-library/react";
import ContactUs from "./ContactUs";

describe("ContactUs tests", () => {
  it("should render", () => {
    expect(render(<ContactUs />)).toBeTruthy();
  });
});
