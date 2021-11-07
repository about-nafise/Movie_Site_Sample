import { Fragment } from "react";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";

function Footer() {
  return (
    <Fragment>
      <Style>
        <footer>
          <div className="container">
            <div className="top-footer">
              <div className="left-footer">
                <Link to="/">
                  <div>
                    <img src="/assets/images/logo-bottom.jpg" alt="logo" />
                  </div>
                </Link>
              </div>
              <div className="middle-footer">
                <div>
                  <p>
                    Movies & TV Shows, Online cinema, Movie database HTML
                    Template.
                  </p>
                </div>
              </div>
              <div className="right-header">
                <Link to="/categories">Categories</Link>
              </div>
            </div>
            <div className="bottom-footer">
              <p>
                <FontAwesomeIcon
                  className="text-light mx-1"
                  icon={faCopyright}
                />
                FlixTV.template, 2021. Created by{" "}
                <a
                  href="https://www.linkedin.com/in/nafise-khelojini/"
                  target="_blank"
                >
                  Nafise Khelojini
                </a>
              </p>
              <div className="text-center py-2 fs-4">
                <a
                  className="mx-2 "
                  href="https://www.github.com/about-nafise"
                  target="_blank"
                >
                  <FontAwesomeIcon className="text-white" icon={faGithub} />
                </a>
                <a
                  className="mx-2"
                  href="https://www.linkedin.com/in/nafise-khelojini/"
                  target="_blank"
                >
                  <FontAwesomeIcon className="text-white" icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Style>
    </Fragment>
  );
}
export default Footer;
