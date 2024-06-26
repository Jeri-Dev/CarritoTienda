import { createContext, useState } from "react";


export const FilterContext = createContext();

export default function FilterProvider({ children }) {

  const [filters, setFilters] = useState({
    category : "all",
    minprice : 0
  })

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
