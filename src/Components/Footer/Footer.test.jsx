import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Footer from "../Footer";
// import App from "../../app";

it("it displays the footer section", async () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("FooterTest");
  expect(footerElement.textContent).toBe("© 2018");
});