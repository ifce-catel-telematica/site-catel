import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";

describe("Contact Page", () => {
  it("renders the Contact heading", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
