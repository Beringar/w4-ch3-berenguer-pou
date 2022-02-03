import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When instantiated with number '8'", () => {
    test("It should display an element with text '8'", () => {
      const key = 8;

      render(<Key number={key} className="" actionOnClick={() => null} />);

      const keyElement = screen.queryByText(key);

      expect(keyElement).toBeInTheDocument();
    });
  });

  describe("When instantiated with a '9' and an action", () => {
    test("It should execute an action when clicked", () => {
      const action = jest.fn();

      render(<Key number={"9"} className="" actionOnClick={action} />);

      const keyElement = screen.queryByText("9");
      userEvent.click(keyElement);

      expect(action).toBeCalled();
    });
  });
});
