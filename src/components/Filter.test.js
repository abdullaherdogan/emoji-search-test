import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";
import { FilterTextProvider } from "../context/FilterTextContext";
describe("Filter Text Test", () => {
    let input;
    beforeEach(() => {
        render(
            <FilterTextProvider>
                <Input />
            </FilterTextProvider>
        );
        input = screen.getByLabelText("Text for filter");
    });
    test("Filter text", () => {
        userEvent.type(input, "Smiley");
        expect(input).toBeInTheDocument();
    });
});
