import React from "react";
import { render } from "@testing-library/react";
import InputField from "../../components/forms/InputField";

test("smoke test", () => {
  const { container } = render(<InputField />);

  const label = container.querySelector(".form-group__label");
  console.log(label.textContent);

  expect(label.textContent).toBe("email address");
});
