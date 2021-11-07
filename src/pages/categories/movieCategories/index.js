import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../../../api";
import { imageServerUrl } from "../../../constant";
import textDots from "../../../helpers";
import ReactPaginate from "react-paginate";
import Style from "./style";

function MovieCategories() {
  const [movie, setMovie] = useState({ results: [] });
  const [page, setPage] = useState(1);
  const { id, name } = useParams();
  useEffect(() => {
    getRequest(`/discover/movie`, { with_genres: id, page }).then(
      (response) => {
        if (response.data) {
          setMovie(response.data);
        }
      }
    );
    document.title = name;
  }, [page]);
  const renderFarm = () => {
    const results = movie.results;
    return results.map((item) => {
      const { id, title, poster_path } = item;
      const imageurl = `${imageServerUrl}${poster_path}`;
      return (
        <div className="col-6 col-sm-4 col-md-3 py-3" key={id}>
          {/* <div className="card"> */}
          <Link to={`/movie-profile/${item.id}`} key={item.id}>
            <div className="movie-image">
              <img
                src={imageurl}
                alt={title}
                onError={(e) =>
                  (e.target.src = "/assets/images/no-image-movies.jpg")
                }
              />
            </div>
            <div className="movie-content ">
              <h3 className="text-center text-light">{textDots(title)}</h3>
            </div>
          </Link>
        </div>
        // </div>
      );
    });
  };

  return (
    <Style>
      <div className="container">
        <div>
          <h3 className="my-3 text-primary text-center">{name}</h3>
          <div className="row">{renderFarm()}</div>
        </div>
        <div className="mx-auto py-4">
          <ReactPaginate
            breakLabel={"..."}
            breakClassName={"text-success"}
            pageCount={movie.total_pages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={(e) => setPage(++e.selected)}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </Style>
  );
}

export default MovieCategories;
