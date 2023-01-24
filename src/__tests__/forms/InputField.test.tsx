import React from "react";
import { render } from "@testing-library/react";
import InputField from "../../components/forms/InputField";

describe("InputField component tests", () => {
  test("InputField renders correctly with required props", () => {
    const { container } = render(<InputField name="testInput" />);
    const inputElement = container.querySelector(`input[name="testInput"]`);
    expect(inputElement).toBeInTheDocument();
  });

  test("InputField renders correctly with type email", () => {
    const { container } = render(<InputField name="emailInput" type="email" />);
    const inputElement = container.querySelector(`input[type="email"]`);
    expect(inputElement).toBeInTheDocument();
  });

  test("InputField renders correctly with type number", () => {
    const { container } = render(<InputField name="emailInput" type="number" />);
    const inputElement = container.querySelector(`input[type="number"]`);
    expect(inputElement).toBeInTheDocument();
  });

  test("InputField renders correctly with a placeholder", () => {
    const { container } = render(<InputField name="placeholder" type="text" placeholder={'TestPlaceholder'} />);
    const inputElement = container.querySelector(`input[name="placeholder"]`);
    expect(inputElement).toHaveAttribute("placeholder", "TestPlaceholder");
  });
});
