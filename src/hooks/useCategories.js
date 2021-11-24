import React, { useEffect, useState } from 'react';

const useCategories = () => {
    const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategorys(data.categories));
  }, [categorys]);
    return {
        categorys
    }
};

export default useCategories;