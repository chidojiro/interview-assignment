import React from "react";
import { render, screen } from "@testing-library/react";
import Icon from "@components/Icon";

describe("Icon component tests", () => {
  test("should render icon and the className", () => {
    const className = "icon";
    const svgProps = {};
    const { container } = render(<Icon iconType="eye" iconClassName={className} svgProps={svgProps} />);

    const iconElement = container.querySelector(".icon");
    expect(iconElement).toHaveClass(className);
    expect(iconElement).toBeInTheDocument();
  });
});
