import { render, screen } from "@testing-library/react";
import Button, { ButtonVariant } from "./Button";

describe("Button", () => {
  test("Test default button", () => {
    render(<Button>Test</Button>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("Test button variant = CLEAR", () => {
    render(<Button variant={ButtonVariant.CLEAR}>Test</Button>);

    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
