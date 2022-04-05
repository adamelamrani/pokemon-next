import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout/Layout";

describe("Given a Layout component", () => {
  describe("When it's instansiated", () => {
    test("Then it should render a navigation bar", () => {
      render(<Layout />);

      const expectedOutput = screen.getByRole("navigation");

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
