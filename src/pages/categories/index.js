import { useEffect, useState } from "react";
import { getRequest } from "../../api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getRequest("genre/movie/list").then((response) => {
      setCategory(response.data.genres);
    });
    document.title = "Categories";
  }, []);
  const renderFarm = () => {
    return category.map((item) => {
      const { id, name } = item;
      return (
        <div key={id} className="col-6 col-md-3 col-sm-4 text-center">
          <div className="categoriesBackground m-1 py-3">
            <Link to={`/categories/${name}/${id}`} className="text-light ">
              <p>{name}</p>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h2 className="my-5 text-primary text-center ">Movies Category</h2>
      <div className="d-flex flex-wrap fs-lg align-items-center">
        {renderFarm()}
      </div>
    </div>
  );
};

export default Categories;
