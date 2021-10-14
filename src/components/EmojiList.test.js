import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Emoji List Test", () => {
    let emojiList;
    beforeAll(() => {
        render(<App />);
        emojiList = screen.getAllByText("Copy to clipboard");
    });
    test("it should be emoji list", () => {
        expect(emojiList.length).toEqual(20);
    });
});
