import { useEffect, useState } from "react";
import axios from "axios";
import ProductsListItem from "../ProductsListItem/ProductsListItem";

const ProductsList = ({ windowSize }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://voodoo-sandbox.myshopify.com/products.json?limit=12")
      .then((res) => setProducts(res.data.products));
  }, []);

  console.log(products);

  return (
    <div className="pt-12 flex flex-wrap">
      {products.map((product) => (
        <ProductsListItem
          product={product}
          key={product.id}
          windowSize={windowSize}
        />
      ))}
    </div>
  );
};

export default ProductsList;
