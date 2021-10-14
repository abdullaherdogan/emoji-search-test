import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiListItem from "./EmojiListItem";
describe("Clipboard Test", () => {
    let button;
    beforeAll(() => {
        render(<EmojiListItem />);
        button = screen.getAllByText("Copy to clipboard");
        userEvent.click(button[0]);
    });
    test("it should be copy to clipboard", async () => {
        const text = await navigator.clipboard.readText();
        console.log(text);
        expect(text).toEqual(true);
    });
});
