import { render, screen } from "@testing-library/react";
import About from "../pages/About";

describe("About Page", () => {
  it("renders the About heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
