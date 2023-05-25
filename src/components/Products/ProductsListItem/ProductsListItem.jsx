import { useState } from "react";
import "./ProductsListItem.scss";

const ProductsListItem = ({ product, windowSize }) => {
  const productTitle =
    product.title.length > 15
      ? product.title.substring(0, 15) + "..."
      : product.title;

  const [openHideInfo, setOpenHideInfo] = useState(false);

  const showHideInfoHandler = () => {
    setOpenHideInfo(!openHideInfo);
  };

  const { options } = product;
  const sizeOption = options.find((option) => option.name === "Size");
  if (!sizeOption) {
    return null;
  }
  const sizeValues = sizeOption.values;

  const colorOption = options.find((option) => option.name === "Color");
  if (!colorOption) {
    return null;
  }
  const colorValues = colorOption.values;

  const elementOption = options.find((option) => option.name === "Element");
  if (!elementOption) {
    return null;
  }
  const elementValues = elementOption.values;

  return (
    <div className="product-item">
      <div
        className="mb-3 relative cursor-pointer"
        onClick={showHideInfoHandler}
      >
        <img src={product.images[0].src} className="product-item-photo__img" />
        <div className="product-item__btn">used</div>
        {openHideInfo && (
          <div className="product-item-hide-ifno">
            <div className="py-14 px-5">
              <ul>
                <li>Product type: {product.product_type}</li>
                <li className="flex ">
                  Size:
                  <ul className="flex">
                    {sizeValues.map((size, index) => (
                      <li className="mx-1" key={index}>
                        {size}
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="flex ">
                  Color:
                  <ul className="flex">
                    {colorValues.map((color, index) => (
                      <li className="mx-1" key={index}>
                        {color}
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="flex">
                  Element:
                  <ul className="flex">
                    {elementValues.map((element, index) => (
                      <li className="mx-1" key={index}>
                        {element}
                      </li>
                    ))}
                  </ul>
                </li>

                <li></li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="product-item-description flex justify-between">
        <div className="">
          <div className="text-sm font-bold">{productTitle}</div>
          <div className="text-sm font-bold">
            {product.variants[0].price} KR.
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold">condition</div>
          <div className="text-sm">slightly-used</div>
        </div>
      </div>
      <button className="w-full uppercase bg-black py-4 rounded text-white mt-3 hover:bg-stone-800 ">
        PICK-UP IN <span className="underline">2200</span>
      </button>
    </div>
  );
};

export default ProductsListItem;
