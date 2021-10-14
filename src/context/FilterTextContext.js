import { createContext, useContext, useState } from "react";

const FilterTextContext = createContext();

export const FilterTextProvider = ({ children }) => {
    const [filterText, setFilterText] = useState("");
    const values = {
        filterText,
        setFilterText,
    };
    return (
        <FilterTextContext.Provider value={values}>
            {children}
        </FilterTextContext.Provider>
    );
};
export const useFilterText = () => useContext(FilterTextContext);
