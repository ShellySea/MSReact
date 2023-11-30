import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", () => {
  it("should load contact page", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    console.log(heading);

    expect(heading).toBeInTheDocument();
  });

  it("should load button inside a component", () => {
    render(<ContactUs />);

    //   const button = screen.getByRole("button");

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load inputname inside a component", () => {
    render(<ContactUs />);

    const name = screen.getByPlaceholderText("name");

    expect(name).toBeInTheDocument();
  });

  test("should load two input boxes inside a component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
