import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keyboard from "./Keyboard";

describe("Given a Keyboard component", () => {
  describe("When instantiated with an array [2, 3]", () => {
    test("It should render 2 elements", () => {
      const keys = [2, 3];
      const expectedNumberOfElements = 2;

      render(<Keyboard className="" keys={keys} actionOnClick={() => null} />);

      const numberOfElements = screen.queryAllByRole("listitem").length;

      expect(numberOfElements).toBe(expectedNumberOfElements);
    });
  });

  describe("When instantiated with an array ['delete'] and clicked on it", () => {
    test("It should execute an action", () => {
      const keys = ["delete"];
      const text = keys[0];

      const action = jest.fn();

      render(<Keyboard keys={keys} className="" actionOnClick={action} />);

      const element = screen.getByText(text);
      userEvent.click(element);

      expect(action).toBeCalled();
    });
  });

  describe("When instantiated with array [7,8,9]", () => {
    test("It should execute action 3 times", () => {
      const keys = [7, 8, 9];
      const action = jest.fn();

      render(<Keyboard keys={keys} className="" actionOnClick={action} />);

      userEvent.click(screen.getByText(keys[0]));
      userEvent.click(screen.getByText(keys[1]));
      userEvent.click(screen.getByText(keys[2]));

      expect(action).toHaveBeenCalledTimes(3);
    });
  });
});
