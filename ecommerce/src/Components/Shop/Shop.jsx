import { Routes, Route, Outlet } from "react-router-dom";

import CategoriesPreview from "../../Routes/CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";

import "./shop.css";

const Shop = function () {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
