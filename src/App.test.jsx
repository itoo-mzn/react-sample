import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Vite + Reacteading", () => {
  render(<App />);
  const headText = screen.getByText(/Vite \+ React/i);
  expect(headText).toBeInTheDocument();
});
