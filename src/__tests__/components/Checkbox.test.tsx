import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "@components/forms/Checkbox";

test("Checkbox exist", () => {
  const { container } = render(<Checkbox name="terms" label="I accept the terms of use" />);
  const checkboxElement = container.querySelector(".selection-control__input");
  expect(checkboxElement).toContainHTML("<input id='field--terms' type='checkbox' name='terms'>");
});

test("Check if has group label", () => {
  const { container } = render(
    <>
      <Checkbox
        name="consent"
        formGroupLabel="Data protection"
        label="Consent Further information on data processing by Randstad"
      />
    </>,
  );
  const consentElement = container.querySelector(".form-group__label");

  expect(consentElement?.tagName).toBe("LABEL");
});
