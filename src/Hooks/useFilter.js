import { useContext } from "react"
import {FilterContext} from "../context/filtercn"

export default function useFilter() {

  const {filters, setFilters} = useContext(FilterContext)

  function filterProducts(products) {
      return products.filter(item => {
        return (
          item.price >= filters.minprice && 
          (
            filters.category == "all" ||
            item.category == filters.category
          )
        )
      })
    }
  
    return {filters, setFilters, filterProducts}
}
