import { useContext, Fragment } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { CategoryPreview } from "../../Components/CategoryPreview/CategoryPreview";
// import ProductCard from "../Products/Product";

const CategoriesPreview = function () {
  const { categoriesMap } = useContext(CategoryContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
