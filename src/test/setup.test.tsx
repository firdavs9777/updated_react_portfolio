import { render, screen } from "@testing-library/react";

describe("test harness", () => {
  it("renders React components into a jsdom document", () => {
    render(<p>harness online</p>);
    expect(screen.getByText("harness online")).toBeInTheDocument();
  });
});
