import { useContext, useState } from "react";
import { FilterContext } from "../context/filtercn";
import FilterButton from "./FilterButton";

export default function FIlter() {
  const [range, setRange] = useState(0);

  const { setFilters } = useContext(FilterContext);

  const handleChange = (e) => {
    setRange(e.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minprice: e.target.value,
    }));
  };

  const handleChangeValue = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.id,
    }));
  };

  return (
    <div className="filtro-div" style={{height : "100%"}}>

    <FilterButton handleChange={handleChange} handleChangeValue={handleChangeValue} range={range}/>

      <div className="filtro">
      <div style={{ margin: 0, gap: "100px" }}>
        <p style={{ margin: 0 }}>Filtrar por: </p>
        <div className="radios" onChange={handleChangeValue}>
          <div className="items">
            <input defaultChecked type="radio" name="categories" id="all" />
            <label htmlFor="all">Todos</label>
          </div>
          <div className="items">
            <input type="radio" name="categories" id="smartphones" />
            <label htmlFor="smartphones">Celulares</label>
          </div>
          <div className="items">
            <input type="radio" name="categories" id="laptops" />
            <label htmlFor="laptops">Laptops</label>
          </div>
          <div className="items">
            <input type="radio" name="categories" id="fragrances" />
            <label htmlFor="fragrances">Perfumes</label>
          </div>
          <div className="items">
            <input type="radio" name="categories" id="skincare" />
            <label htmlFor="skincare">Skincare</label>
          </div>
          <div className="items">
            <input type="radio" name="categories" id="groceries" />
            <label htmlFor="groceries">Groseries</label>
          </div>
          <div className="items">
            <input type="radio" name="categories" id="home-decoration" />
            <label htmlFor="home-decoration">Hogar</label>
          </div>
        </div>
      </div>

      <div style={{ margin: 0 }}>
        <p style={{ margin: 0 }}>Precio minimo: </p>
        <input type="range" min={0} max={2000} onChange={handleChange} />
        <p>${range}</p>
      </div>
      </div>
    </div>
  );
}
