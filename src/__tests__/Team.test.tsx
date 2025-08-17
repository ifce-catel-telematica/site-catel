import { render, screen } from "@testing-library/react";
import Team from "../pages/Team";

describe("Team Page", () => {
  it("renders the Team heading", () => {
    render(<Team />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
