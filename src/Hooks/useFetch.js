import {useState, useEffect}from 'react'

export default function useFetch(url) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const res = await fetch(url);
          const data = await res.json();
          setItems(data.products);
        };
    
        fetchProducts();
      }, [url]);

    return items
}
