import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";

import SHOP_DATA from "../shop-data.js";

export const CategoryContext = createContext({
  categoriesMap: {},
});

export const CategoryProvider = function ({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
