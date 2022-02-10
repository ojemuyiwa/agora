import { render, screen } from "@testing-library/react";
import App from "./App";

// would generally test custom written code only and not third party, redux, thunks, material ul etc and they've already been tested
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Agora Front-End Test/i);
  expect(linkElement).toBeInTheDocument();
});
