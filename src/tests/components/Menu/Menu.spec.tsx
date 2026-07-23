import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Menu from "@/components/Menu";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: "pt-BR",
      changeLanguage: vi.fn()
    }
  }),
}));

vi.mock("@/components/LanguageSwitcher", () => ({
  default: ({ mobile }: { mobile?: boolean }) => (
    <div data-testid="mock-lang-switcher">{mobile ? "Mobile" : "Desktop"}</div>
  )
}));

vi.mock("@/components/ToggleTheme", () => ({
  default: () => <div data-testid="mock-theme-toggle">Theme</div>
}));

describe("Menu Component", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  it("should render mobile menu when mobile prop is true", () => {
    render(<Menu mobile={true} />);

    expect(screen.getByTestId("mock-lang-switcher")).toHaveTextContent("Mobile");
  });

  it("should scroll to top and call onClose when Home link is clicked", () => {
    const onCloseMock = vi.fn();
    render(<Menu mobile={true} onClose={onCloseMock} />);

    const homeLink = screen.getByText("menu.home");
    fireEvent.click(homeLink);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when other links are clicked in mobile view", () => {
    const onCloseMock = vi.fn();
    render(<Menu mobile={true} onClose={onCloseMock} />);

    const aboutLink = screen.getByText("menu.about");
    fireEvent.click(aboutLink);

    expect(window.scrollTo).not.toHaveBeenCalled();
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});