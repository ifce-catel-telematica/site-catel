import { render, screen } from "@testing-library/react";
import Events from "../pages/Events";

describe("Events Page", () => {
  it("renders the Events heading", () => {
    render(<Events />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
