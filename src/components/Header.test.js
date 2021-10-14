import { render, screen } from "@testing-library/react";
import Header from "./Header";
describe("Header Test", () => {
    let header;
    beforeEach(() => {
        render(<Header />);
        header = screen.getByText("Emoji Search");
    });
    test("it should be header title in document", () => {
        expect(header).toBeInTheDocument();
    });
});
