import { Fragment } from "react";
import { useAuthState } from "../../context";
import { Link, NavLink } from "react-router-dom";
import Search from "../../components/search";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";

function Header() {
  const userData = useAuthState();

  function userLoginHandlerDesktop() {
    if (userData.token) {
      return (
        <Link to="/user-profile">
          <button className="desktopButton rounded-pill form-control text-light px-3 py-1 my-2">
            Profile
          </button>
        </Link>
      );
    } else {
      return (
        <Link to="/login">
          <button className="desktopButton rounded-pill form-control text-light px-3 py-1 my-2">
            Login
          </button>
        </Link>
      );
    }
  }
  function userLoginHandlerMobile() {
    if (userData.token) {
      return (
        <NavLink
          exact={true}
          activeClassName="text-primary"
          className="p-2"
          to="/user-profile"
        >
          Profile
        </NavLink>
      );
    } else {
      return (
        <NavLink
          exact={true}
          activeClassName="text-primary"
          className="desktopLogin p-2"
          to="/login"
        >
          Login
        </NavLink>
      );
    }
  }

  function closeNavbar() {
    document.getElementById("closeLeftNavbar").click();
  }

  return (
    <Fragment>
      <Style>
        <div className="container">
          <header className="desktopHeader d-none d-lg-block">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/">
                <img src="/assets/images/logo.jpg" alt="logo" />
              </NavLink>
              <div className="collapse navbar-collapse" id="desktopNavbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      activeClassName="active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      to="/categories"
                      activeClassName="text-danger"
                    >
                      Categories
                    </NavLink>
                  </li>
                </ul>
                <div>
                  <ul className="d-flex">
                    <li>
                      <Search />
                    </li>
                    <li>{userLoginHandlerDesktop()}</li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <header className="d-block d-lg-none">
            <div className="mobileHeader">
              <ul className="d-flex align-items-center">
                <li className="col-2">
                  <button
                    className="navbar-toggler navbar-dark"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#leftNavbar"
                    aria-controls="leftNavbar"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </li>
                <li className="mobileLogo col-8">
                  <Link to="/">
                    <img src="/assets/images/logo.jpg" alt="logo" />
                  </Link>
                </li>
                <li
                  type="button"
                  className="mobileSearch col-2"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <FontAwesomeIcon
                    className="searchIcon text-white"
                    icon={faSearch}
                  />
                </li>
              </ul>
            </div>
            <div
              className="modal fade"
              id="searchModal"
              tabIndex="-1"
              aria-labelledby="searchModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="searchModalLabel">
                      Search Movie
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Search />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-start bg-dark text-light"
              tabIndex="-1"
              id="leftNavbar"
              aria-labelledby="navbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="navbarLabel">
                  Menu
                </h5>
                <button
                  id="closeLeftNavbar"
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body small">
                <div>
                  <ul
                    className="navbar-nav me-auto mb-2 mb-lg-0"
                    onClick={closeNavbar}
                  >
                    <li className="nav-item my-2">
                      <NavLink
                        exact={true}
                        activeClassName="text-primary"
                        className="p-2"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item my-2">
                      {userLoginHandlerMobile()}
                    </li>
                    <li className="nav-item my-2">
                      <NavLink
                        exact={true}
                        activeClassName="text-primary"
                        className="p-2"
                        to="/categories"
                      >
                        Categories
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>
      </Style>
    </Fragment>
  );
}
export default Header;
