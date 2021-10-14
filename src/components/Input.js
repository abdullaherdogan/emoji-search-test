import { useFilterText } from "../context/FilterTextContext";
function Input() {
    const { setFilterText } = useFilterText();
    return (
        <label>
            Text for filter
            <input
                onChange={(e) => setFilterText(e.target.value)}
                placeholder="Enter a text"
            />
        </label>
    );
}

export default Input;
