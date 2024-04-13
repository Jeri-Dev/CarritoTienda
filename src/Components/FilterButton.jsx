import React from 'react'
import { useState } from 'react'

export default function FilterButton({handleChangeValue, handleChange, range}) {
  
    const [showFilters, setShowFilters] = useState(true)
  
    return (
    <div>
    <button className="button_type1" onClick={() => {setShowFilters(!showFilters)}}>Filtros</button>
        
    {showFilters ? 
    <div className="filtro-button">
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
    <button className="button_type1" onClick={() => {setShowFilters(!showFilters)}}>Aceptar</button>

    </div> : <></>}
    </div>
  )
}
