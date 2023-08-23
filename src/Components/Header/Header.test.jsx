import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Header from "./index";

it("it displays the footer section", async () => {
  render(<Header />);
  const headerElement = screen.getByTestId("headerTest");
  expect(headerElement.textContent).toBe("RESTy");
});