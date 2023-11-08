import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("Test default Input", () => {
    render(<Input />);
    expect(screen.getByTestId("test-input")).toBeInTheDocument();
  });

  test("Test input with value", () => {
    render(<Input value={"123"} />);
    const input = screen.getByTestId("test-input") as HTMLInputElement;
    expect(input.value).toBe("123");
  });

  test("Test input with label", () => {
    render(<Input label={"123"} />);
    expect(screen.getByLabelText("123")).toBeInTheDocument();
  });

  test("Test input change value", () => {
    const mockCallback = jest.fn();
    render(<Input onChange={mockCallback} />);
    const input = screen.getByTestId("test-input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "555" } });
    expect(input.value).toBe("555");
    expect(mockCallback).toHaveBeenLastCalledWith("555");

    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");
    expect(mockCallback).toHaveBeenLastCalledWith("");
  });
});
