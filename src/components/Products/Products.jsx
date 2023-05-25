import "./Products.scss";
import ProductsList from "./ProductsList/ProductsList";

const Products = ({ windowSize }) => {
  return (
    <div className="">
      <ProductsList windowSize={windowSize} />
    </div>
  );
};

export default Products;
