import { render, screen } from "@testing-library/react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a nav html element", () => {
      render(<NavigationBar />);
      const element = "navigation";

      const expectedElement = screen.getByRole(element);

      expect(expectedElement).toBeInTheDocument();
    });
  });

  describe("When the navigation it's invoked", () => {
    test("Then it should contain a list of links ", () => {
      render(<NavigationBar />);
      const element = "link";

      const expectedElements = screen.getAllByRole(element);

      expectedElements.forEach((element) =>
        expect(element).toBeInTheDocument()
      );
    });
  });

  test("Then it should render an svg image", () => {
    render(<NavigationBar />);
    const element = "img";

    const expectedElement = screen.getByRole(element);
    expect(expectedElement).toBeInTheDocument();
  });
});
