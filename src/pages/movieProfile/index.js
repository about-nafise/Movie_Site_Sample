import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { imageServerUrl, backgroundMovieBaseUrl } from "../../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { getRequest } from "../../api";
import Style from "./style";

function MovieProfile() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [movieError, setMovieError] = useState(false);

  useEffect(() => {
    setMovieError(false);
    setMovieInfo(null);
    getMovieInfo();
  }, [id]);

  function getMovieInfo() {
    getRequest(`/movie/${id}`).then((response) => {
      console.log(response);
      if (response.ok) {
        setMovieInfo(response.data);
        document.title = response.data.original_title;
      } else {
        setMovieError(true);
      }
    });
  }

  if (!movieInfo && !movieError) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
  if (movieError) {
    return (
      <div>
        <p>Error...</p>
      </div>
    );
  }
  function renderFarm() {
    return (
      <Style>
        <div
          className="mainBackground"
          style={{
            backgroundImage: `url(${backgroundMovieBaseUrl}${movieInfo.backdrop_path})`,
          }}
        >
          <div className="backgroundColor">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center py-5">
                <div className="col-12 col-md-3">
                  <img
                    src={`${imageServerUrl}${movieInfo.poster_path}`}
                    width="100"
                  />
                </div>
                <div className="movieDetail col-12 col-md-9">
                  <h2 className="mx-3 pt-5">
                    {movieInfo.original_title || movieInfo.original_name}
                  </h2>
                  <div className="d-flex">
                    <span className="mx-3 my-2">
                      <FontAwesomeIcon icon={faStar} />
                      <span className="mx-2">{movieInfo.vote_average}</span>
                    </span>
                    {movieInfo.release_date && (
                      <span className="mx-3 my-2">
                        <FontAwesomeIcon icon={faDotCircle} />
                        <span className="mx-2">
                          {movieInfo.release_date.slice(0, 4)}
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="my-3 mx-3">
                    {movieInfo.genres.map((item) => {
                      return (
                        <Link
                          key={`${(movieInfo.id, item.id)}`}
                          className="btn-light mt-2 rounded-pill mx-1 my-2 px-2"
                          to={`/categories/${item.name}/${item.id}`}
                        >
                          <small>{item.name}</small>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mx-3 ">
                    <p>{movieInfo.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    );
  }
  return <div>{renderFarm()}</div>;
}

export default MovieProfile;
