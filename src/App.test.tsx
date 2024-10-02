import App from "./App";
import { render, screen } from "@testing-library/react";

test("renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Products/i);
  expect(linkElement).toBeInTheDocument();
});
