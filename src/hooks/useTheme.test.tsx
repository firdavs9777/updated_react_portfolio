import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, vi } from "vitest";
import { useTheme } from "./useTheme";

function Probe() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} data-testid="probe">
      {theme}
    </button>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.classList.remove("dark");
});

describe("useTheme", () => {
  it("reads the theme already applied to the document by the bootstrap script", () => {
    document.documentElement.classList.add("dark");
    render(<Probe />);
    expect(screen.getByTestId("probe")).toHaveTextContent("dark");
  });

  it("defaults to light when the document carries no dark class", () => {
    render(<Probe />);
    expect(screen.getByTestId("probe")).toHaveTextContent("light");
  });

  it("toggles the theme and the document class together", async () => {
    render(<Probe />);
    await userEvent.click(screen.getByTestId("probe"));
    expect(screen.getByTestId("probe")).toHaveTextContent("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("persists the chosen theme", async () => {
    render(<Probe />);
    await userEvent.click(screen.getByTestId("probe"));
    expect(window.localStorage.getItem("theme")).toBe("dark");
  });

  it("still renders when localStorage throws", async () => {
    const spy = vi.spyOn(window.localStorage, "setItem").mockImplementation(() => {
      throw new Error("denied");
    });

    render(<Probe />);
    await act(async () => {
      await userEvent.click(screen.getByTestId("probe"));
    });

    expect(screen.getByTestId("probe")).toHaveTextContent("dark");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
