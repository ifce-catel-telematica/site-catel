import { render, screen } from "@testing-library/react";
import Archive from "../pages/Archive";

describe("Archive Page", () => {
  it("renders the Archive heading", () => {
    render(<Archive />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
