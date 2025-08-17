import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home Page", () => {
  it("renders the Home heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
