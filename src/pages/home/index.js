import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageServerUrl } from "../../constant";
import textDots from "../../helpers";
import Slider from "react-slick";
import { getRequest } from "../../api";
import Style from "./style";
import { Link } from "react-router-dom";

function Home() {
  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [moviesInfoWeekly, setMoviesInfoWeekly] = useState([]);
  useEffect(() => {
    getRequest(`/trending/all/day`).then((response) => {
      setMoviesInfo(response.data.results);
    });
    getRequest(`/trending/all/week`).then((response) => {
      setMoviesInfoWeekly(response.data.results);
    });
    document.title = "Home";
  }, []);
  function errorImage(e) {
    e.target.src = "/assets/images/no-image-movies.jpg";
  }
  const renderFarm = () => {
    return moviesInfo.map(function (item, index) {
      const { poster_path, original_title, original_name } = item;
      let imageUrl = `${imageServerUrl}${poster_path}`;
      return (
        <Link to={`/movie-profile/${item.id}`} key={item.id}>
          <div className="slider">
            <div>
              <img
                src={imageUrl}
                onError={errorImage}
                alt={original_title || original_name}
              />
              <h2 className="title mt-4">
                {textDots(original_title || original_name)}
              </h2>
            </div>
          </div>
        </Link>
      );
    });
  };
  const renderFarmWeekly = () => {
    return moviesInfoWeekly.map(function (item, index) {
      const { poster_path, original_title, original_name } = item;
      let imageUrl = `${imageServerUrl}${poster_path}`;
      return (
        <Link to={`/movie-profile/${item.id}`} key={item.id}>
          <div className="slider">
            <div>
              <img
                src={imageUrl}
                onError={errorImage}
                alt={original_title || original_name}
              />
              <h2 className="title mt-4">
                {textDots(original_title || original_name)}
              </h2>
            </div>
          </div>
        </Link>
      );
    });
  };
  return (
    <Style>
      <div className="container">
        <h3>Daily Trending Movies</h3>
        <Slider {...settings}>{renderFarm()}</Slider>
        <h3>Weekly Trending Movies</h3>
        <Slider {...settings}>{renderFarmWeekly()}</Slider>
      </div>
    </Style>
  );
}

export default Home;
