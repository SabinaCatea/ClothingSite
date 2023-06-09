import { Link } from "react-router-dom";

import ProductCard from "../Products/Product";
import "./category-preview.scss";

export const CategoryPreview = function ({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.td} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};
