import { render, screen } from "@testing-library/react";
import News from "../pages/News";

describe("News Page", () => {
  it("renders the News heading", () => {
    render(<News />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
