import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../api";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageServerUrl } from "../../constant";
import Style from "./style";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(true, false);
  const params = {
    query: `${keyword}`,
  };
  useEffect(() => {}, [results]);
  function searchMovie(el) {
    if (el.target.value.length > 2) {
      setKeyword(el.target.value);
      getRequest("search/multi", params).then((response) => {
        if (response.status == 200) {
          setResults(response.data.results);
        } else {
        }
      });
    } else {
      setResults([]);
      setKeyword("");
    }
  }
  function renderFarm() {
    if (!showSearchBox) {
      return null;
    }
    if (results.length > 0) {
      return results.map((item, index) => {
        const hasPoster = !!item.poster_path;
        const posterUrl = `${imageServerUrl}${item.poster_path}`;
        const defaultPosterUrl = "/assets/images/no-image-movies.jpg";
        return (
          <Link
            to={`/movie-profile/${item.id}`}
            key={item.id}
            onClick={(e) => setResults([])}
          >
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="searchImg"
                  src={hasPoster ? posterUrl : defaultPosterUrl}
                />
              </div>
              <h5>{item.name || item.original_title || item.title}</h5>
            </div>
          </Link>
        );
      });
    } else if (keyword !== "") {
      return <p>Movie Not Found</p>;
    }
  }
  return (
    <Style>
      <div className="position-relative">
        <div className="inputContainer me-4">
          <input
            className="searchDesktop rounded-pill form-control text-light px-2 py-1 my-2"
            placeholder="I'm Looking For..."
            type="text"
            onChange={searchMovie}
            onBlur={() => {
              setTimeout(() => {
                setShowSearchBox(false);
              }, 1000);
            }}
            onFocus={() => setShowSearchBox(true)}
          />
        </div>
        <FontAwesomeIcon className="searchIcon text-white" icon={faSearch} />
        <div className="searchBox me-4 w-100">{renderFarm()}</div>
      </div>
    </Style>
  );
}

export default Search;
