import { render, screen } from "@testing-library/react";
/* import "@testing-library/jest-dom"; */
import Home from "../pages";

describe("Given a Home component", () => {
  describe("When it's invoked", () => {
    test("Then it should display a heading", () => {
      render(<Home />);
      const heading = "heading";

      const expectedHeading = screen.getByRole(heading);
      expect(expectedHeading).toBeInTheDocument();
      expect(expectedHeading.textContent).toBe("Pokemon with Next.js");
    });
  });
});
