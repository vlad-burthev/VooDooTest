import "./Products.scss";
import ProductsList from "./ProductsList/ProductsList";

const Products = ({ windowSize }) => {
  return (
    <>
      <ProductsList windowSize={windowSize} />
    </>
  );
};

export default Products;
