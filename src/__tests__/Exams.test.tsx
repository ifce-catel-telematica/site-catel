import { render, screen } from "@testing-library/react";
import Exams from "../pages/Exams";

describe("Exams Page", () => {
  it("renders the Exams heading", () => {
    render(<Exams />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
